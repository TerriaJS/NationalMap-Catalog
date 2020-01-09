"use strict";

/*global require*/

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
//var generateSchema = require('generate-terriajs-schema');
//var validateSchema = require('terriajs-schema');

var watching = false; // if we're in watch mode, we try to never quit.
var watchOptions = { poll:1000, interval: 1000 }; // time between watch intervals. OSX hates short intervals. Different versions of Gulp use different options.
var sourceDir = 'datasources';
var derivedSourceDir = 'derived_datasources';
var workDir = 'work';
var targetDir = 'build';
var absSdmxCsvPath = sourceDir + '/' + 'sdmx-abs.csv';
// Create the build directory, because browserify flips out if the directory that might
// contain an existing source map doesn't exist.

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

if (!fs.existsSync(workDir)) {
    fs.mkdirSync(workDir);
}

// Regenerate the anti-LGA filter in datasources/includes/lga_filter.ejs
// Needs to be run manually every now and then.
gulp.task('update-lga-filter', function(done) {
    var requestp = require('request-promise');
    console.log('Contacting data.gov.au');
    return requestp({
        url: 'https://data.gov.au/api/3/action/organization_list?all_fields=true&include_extras=true',
        json: true
    }).then(function(results) {
        var filterFile = 'datasources/includes/lga_filter.ejs';
        var r = results.result.filter( org => org.extras.filter(extra => extra.key === 'jurisdiction' && extra.value === 'Local Government').length > 0).map(org => 'organization:' + org.name);
        fs.writeFileSync(filterFile, '<%# Generated automatically by gulpfile.js %>' + r.join(' OR '));
        console.log('Updated filter from data.gov.au in ' + filterFile);
    }).catch(function(e) {
        console.error(e.message);
    });
    done()
});

gulp.task('render-datasource-templates', gulp.series('update-lga-filter', function(done) {
// gulp.task('render-datasource-templates', function() {  // just for testing, removes update-lga-filter
    var ejs = require('ejs');
    var JSON5 = require('json5');
    var convertSdmxCsvToEjs = require('./lib/convertSdmxCsvToEjs');

    // Start by rendering the sdmx-abs catalog from the csv to ejs, which is an input to nm.ejs.
    convertSdmxCsvToEjs(absSdmxCsvPath, derivedSourceDir + '/' + 'sdmx-abs.ejs');
    testAndRead(sourceDir);

    function testAndRead(dir) {
        try {
            fs.accessSync(dir);
        } catch (e) {
            // Datasources directory doesn't exist? No problem.
            return;
        }
        fs.readdirSync(dir).forEach(processSource);
        done()
        function processSource(filename) {
            if (filename.match(/\.ejs$/)) {
                var templateFilename = path.join(dir, filename);
                var template = fs.readFileSync(templateFilename, 'utf8');
                var result = ejs.render(template, null, {filename: templateFilename});

                // Remove new lines from inside quotes. This means you can add newlines to strings to help keep source files manageable, without breaking your JSON5.
                // We can't remove _all_ new lines, since this would break comments in JSON5.
                // NOTE: this replacement fails when there are unmatched quotes in comments - eg. apostrophes.
                // If you want actual new lines displayed somewhere, you should probably use <br/> if it's HTML, or \n\n if it's Markdown.
                // The first regex below finds text between quotes, which may include new lines.
                // The second regex removes the new line characters from those matches, if any.
                result = result.replace(/(["'])(?:(?!\1)[^\\]|\\.)*\1/g, match => match.replace(/(?:\r\n|\r|\n)/g, ''));

                var outFilename = filename.replace('.ejs', '.json');
                var resultJson = '', resultJson_big = '';
                try {
                    resultJson = JSON.stringify(JSON5.parse(result), null, 0);
                    resultJson_big = JSON.stringify(JSON5.parse(result), null, 2);
                    console.log('Rendered template ' + outFilename);
                } catch (e) {
                    if (e.name === 'SyntaxError') {
                        var context = 20;
                        console.error('Syntax error while processing templates: ' + e.message);
                        console.error(result.substring(e.at - context, e.at + context));
                        console.error(new Array(context + 1).join('-').substring(0, Math.min(e.at, context)) + '^');
                    }
                    console.warn('Warning: Rendered template ' + outFilename + ' is not valid JSON.');
                }
                fs.writeFileSync(path.join(targetDir, outFilename), new Buffer(resultJson));
                // write a non-minified version too.
                fs.writeFileSync(path.join(targetDir, filename.replace('.ejs', '_big.json')), new Buffer(resultJson_big));
            }
        }
    }

}));

gulp.task('list-ga-services', gulp.series('render-datasource-templates', function(done) {
    const catalog = require('./build/nm.json');

    const urls = {};
    function findGAUrls(list) {
        for (var i = 0; i < list.length; ++i) {
            const item = list[i];
            const url = item.url;
            if (url && url.indexOf('ga.gov.au') >= 0) {
                urls[url] = true;
            }

            if (item.items) {
                findGAUrls(item.items);
            }
        }
    }

    findGAUrls(catalog.catalog);

    const urlList = Object.keys(urls);
    urlList.sort();

    fs.writeFileSync('./build/ga_services.txt',
        'These Geoscience Australia services are currently being referenced in the catalog.\n\n' +
        urlList.join('\n'));
    done()
}));

// Generate new schema for editor, and copy it over whatever version came with editor.
/*
gulp.task('make-editor-schema', ['copy-editor'], function(done) {
    generateSchema({
        source: 'node_modules/terriajs',
        dest: 'wwwroot/editor',
        noversionsubdir: true,
        editor: true,
        quiet: true
    }).then(done);
});
*/
/*
gulp.task('copy-editor', function() {
    return gulp.src('./node_modules/terriajs-catalog-editor/**')
        .pipe(gulp.dest('./wwwroot/editor'));
});
*/


// Generate new schema for validator, and copy it over whatever version came with validator.
gulp.task('make-validator-schema', function(done) {
    // Skip generation for now.
    done();
    /*generateSchema({
        source: 'node_modules/terriajs',
        dest: 'node_modules/terriajs-schema/schema',
        quiet: true
    }).then(done);*/
});
/*
This is definitely broken now.
gulp.task('validate', ['merge-datasources', 'make-validator-schema'], function() {
    return validateSchema({
        terriajsdir: 'node_modules/terriajs',
        _: glob.sync([sourceDir + '/00_National_Data_Sets/*.json', sourceDir + '/*.json', '!' + sourceDir + '/00_National_Data_Sets.json', targetDir + '/*.json', '!' + targetDir + '/nm.json'])
    }).then(function(result) {
        if (result && !watching) {
            // We should abort here. But currently we can't resolve the situation where a data source legitimately
            // uses some new feature not present in the latest published TerriaJS.
            //process.exit(result);
        }
    });
});
*/
/*
    Use EJS to render "datasources/foo.ejs" to "wwwroot/init/foo.json". Include files should be
    stored in "datasources/includes/blah.ejs". You can refer to an include file as:

    <%- include includes/foo %>

    If you want to pass parameters to the included file, do this instead:

    <%- include('includes/foo', { name: 'Cool layer' } %>

    and in includes/foo:

    "name": "<%= name %>"
 */

gulp.task('get-abs-sdmx-metadata', function() {
    const sdmxJsonDataFlow = "http://stat.data.abs.gov.au/sdmx-json/dataflow/";
    const sdmxDataStructure = "http://stat.data.abs.gov.au/restsdmx/sdmx.ashx/GetDataStructure/";
    const ignoreJsonDimensionIds = ["TIME_PERIOD", "STATE", "REGION", "ASGS_2011", "ASGS_2016", "LGA_2011", "LGA_2013", "LGA_2014", "LGA2014",
        "LGA_2015", "LGA_2016", "LGA_2017", "ASGS_2011_STATE_GCCSA_SA4_SA3_SA2", "ASGC_2010", "NRM_2012", "POA", "SSC"];
    var getSdmxMetaData = require('./lib/getSdmxMetaData');
    var csv = require('./lib/ThirdParty/csv');
    var stringData = fs.readFileSync(absSdmxCsvPath, "utf8");
    var rowsAsObjects = csv.toObjects(stringData);
    var ids = rowsAsObjects.filter(row => !row["#include"] || row["#include"].toLowerCase()[0] === 't').map(row => row.id);
    getSdmxMetaData(ids, sdmxJsonDataFlow, sdmxDataStructure, ignoreJsonDimensionIds);
});


gulp.task('watch-datasource-templates', gulp.series('render-datasource-templates', function() {
    return gulp.watch(['datasources/**/*.csv', 'datasources/**/*.ejs', 'datasources/*.json'], watchOptions, [ 'render-datasource-templates' ]);
}));

gulp.task('build', gulp.series('render-datasource-templates', 'list-ga-services'));
gulp.task('release', gulp.series('render-datasource-templates',/*'make-editor-schema', 'validate'*/));
gulp.task('watch', gulp.series('watch-datasource-templates'));
gulp.task('default', gulp.series('build'));
