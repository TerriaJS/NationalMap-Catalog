
Change Log
==========

### 2019-02-18-updated-2019-03-20

* Added Fractional Cover Percentiles Seasonal layers.

### 2018-12-17-updated-2019-02-19

* Removing the defunct layer "Dynamic Hydrology and Marine Layer" from "National Datasets -> Surface Water and Marine" group.
* Add new Digital Earth Australia Fractional Cover Percentiles(FCP) to the "National Datasets -> Vegetation" group.

### 2018-12-17-updated-2019-01-29

* Make www.data.vic.gov.au use https and CORS instead of going through the proxy.
* Add new Digital Earth Australia National Intertidal Digital Elevation Model (NIDEM) to the "National Datasets -> Surface Water and Marine -> Tidal" group.
* Replace existing layers with new Digital Earth Australia Water Observations from Space layers in "National Datasets -> Surface Water and Marine -> Water Observations from Space".
* Add new Digital Earth Australia Daily Landsat imagery to the group "National Datasets -> Satellite Imagery -> Landsat Daily Aggregate Terrain Corrected Surface Reflectance".
* Add new Digital Earth Australia group of layers in "National Datasets -> Surface Water and Marine -> Water Observations from Space -> Seasonal Summaries".

### 2018-12-17

* No changes in this release.

### 2018-11-20

* Added Latrobe City Council to local council list for data.gov.au query.

### 2018-10-12-updated-2018-10-24

* Change visualisation of "National Datasets -> Health -> Primary Health Networks" to colour in each region with a different colour.
* Improve look and feel of layers in "National Datasets -> National Boundaries".

### 2018-10-11

* No changes in this release.

### 2018-09-14-updated-2018-10-15

* Updated the Digital Earth Australia layers in "National Datasets -> Satellite Imagery -> Sentinel-2 A/B Near Real-Time (NRT) terrain corrected surface reflectance" to use a new service endpoint which has a 90 day sliding window of imagery.
* Add the layer "National Datasets -> Surface Water and Marine -> Water Observations from Space -> Daily Water Observation Feature Layer" from Digital Earth Australia.
* Add the layer "National Datasets -> Satellite Imagery -> Barest Earth -> Barest Earth 25m (Landsat 8)" from Digital Earth Australia.
* Add the layers "Multi-Scale Topographic Position" and "Weathering Intensity" from Digital Earth Australia to the "National Datasets -> Land" group.
* Add CORS support and change to using TLS for NCI GSKY based Digital Earth Australia layers.

### 2018-09-14-updated-2018-10-04

* Temporarily remove the ACT Mapi layers while we work around a problem.

### 2018-09-14-updated-2018-10-03

* Add Geomedian layers from Digital Earth Australia to "National Datasets -> Satellite Imagery".
* Add Mangrove Canopy Cover from Digital Earth Australia to "National Datasets -> Surface Water and Marine -> Tidal".
* Replace the existing layers in "National Datasets -> Surface Water and Marine -> Water Observations from Space" with new updated layers from Digital Earth Australia.

### 2018-07-16-updated-2018-08-14

* Set Digital Earth Australia AWS based layers to be accessed directly using CORS.

### 2018-07-16-updated-2018-08-10

* Added Sentinel-2 satellite imagery to "National Datasets -> Satellite Imagery" from Digital Earth Australia.

### 2018-07-16-updated-2018-07-23

* Added `Postal Areas (2016)` under `National Boundaries`.

### 2018-05-16-updated-2018-06-06

* Updated the Telecommunications in New Developments layer to point to the correct CKAN resourceID.

### 2018-05-16-updated-2018-05-31

* Added Sydney to "Local Government -> New South Wales".

### 2018-05-16

* Added year range to Landsat 5/7/8 group names.

### 2018-04-16-updated-2018-05-14

* Move the "Data Providers -> Water (Bureau of Meteorology Geofabric)" into "National Datasets -> Surface Water and Marine" to replace the manually curated "Australian Hydrological Geospatial Fabric (Geofabric)".
* Removing "National Datasets -> Framework -> Waste Management Facilities" as this is a duplicate to the layer in "Infrastructure".
* Removing "National Datasets -> Elevation -> Flow Grid Direction Image" as the dataset has been decomissioned by the data custodian.
* Add feature info image to the "DEA Intertidal Extents Relative Model and Confidence Layer 25m v2.0 polygons for access to data" layer.

### 2018-04-16-updated-2018-05-03

* Added Taxation Statistics 2015-2016.
* Tweaked image chart caption for DEA Tidal Polygon layers.

### 2018-04-16

* Tweaked formatting of DEA ITEM feature info template.

### 2018-03-15-updated-2018-04-13

* Added new polygon layers for data access to the Digital Earth Australia layers in National Datasets -> Surface Water and Marine -> Tidal.

### 2018-03-15-updated-2018-04-11

* Added `useOwnClock: true` to the Landast / Digital Earth Australia layers.

### 2018-03-15-updated-2018-04-09

* Removed specified rectangle for the Population Estimates layer as it was causing the layer to be incorrectly clipped.

### 2018-03-15-updated-2018-03-21

* Fixed a bad URL for the "Radio Licenses" layer.

### 2018-03-15-updated-2018-03-16

* Add new Digital Earth Australia Landsat layers.

### 2018-03-15

* GZIP the published the catalog on S3 for a smaller download size.

### 2018-02-15

* Removed broken 2016 version of Catchment Scale Land Use and adding working 2017 version.

### 2017-11-30-updated-2018-02-12

* Updated list of local governments.

### 2017-11-30-updated-2018-01-22

* Removed some missing layers from the Australian Capital Territory Government group, and configured most of the groups to do a live query from the ACT servers rather than hard-coding the list of layers.
* Removed Rockhampton QLD's localdata.net.au CKAN server, because it appears to no longer exist.
* Removed Tasmanian Government -> Placename Points because the service no longer exists.

### 2017-11-30-updated-2017-12-13

* Replaced reference to https://marriagesurvey.abs.gov.au/ with http://www.abs.gov.au/ausstats/abs@.nsf/mf/1800.0, as the former is being decommissioned.

### 2017-11-30

* Added items for the response and participation in the Australian Marriage Law Postal Survey to the catalog.
* Added `Land Management Practices Survey 2013-2014` and `Land Use - Agricultural Commodities 2011-2016` datasets to the `National Datasets` -> `Land` -> `Agriculture and Mining` group.

### 2017-11-09

* Removed six datasets from the catalog that have been taken down from the ABS SDMX-JSON service (ABS_ERP_LGA, ABS_ANNUAL_ERP_LGA, ABS_ANNUAL_ERP_LGA2014, ABS_ERP_LGA2014, ABS_ANNUAL_ERP_LGA2015, ABS_ERP_LGA2015)
* Added two replacement datasets to the catalog, ABS_ERP_LGA2016 and ABS_ANNUAL_ERP_LGA2016.
* Added ATSI_BIRTHS_SUMM, ATSI_FERTILITY, ABS_BLDG_APPROVALS_LGA2016, ABS_BA_SA2_ASGS2016, CONFINEMENTS_NUPTIALITY, CONFINEMENTS_PLURALITY, FERTILITY_AGE_STATE, PATERNITY_AGE_STATE, RES_DWELL, RES_PROP_INDEX.
* Fix broken link in Broadband layer descriptions and add some text explaining that the data is historical.

### 2017-09-15

* Added more datasets from the 2016 Census.

### 2017-07-21-updated-2017-08-22

* Fixed the URL to National Datasets -> Communications -> Radio Licenses (ACMA).
* Use the 2011 POA boundaries for the Taxation Statistics layers (2012-2013, 2013-2014, and 2014-2015), and don't show warnings about missing non-spatial regions.

### 2017-07-21-updated-2017-08-17

* Updated the `Aspect` and `Land slope in percent` layers in the `Elevation` group to use new ArcGIS MapServers.

### 2017-07-21-updated-2017-08-15

* Updated links to some Geoscience Australia services in National Datasets.
* Removed the Integrated Marine Observing System (IMOS) from Data Providers because it has no items.

### 2017-07-21

* Added Australian Bureau of Statistics Census 2016 layers.

### 2017-06-15-updated-2017-07-20

* Updated Brisbane City Council to use resource names instead of dataset names.
* Removed Queensland group.
* Renamed Queensland BETA group to Queensland.
* Added Ipswich City Council.

### 2017-06-15

* Changed the 2011 ABS SDMX-JSON items to explicitly require 2011 regions, because the default will be updated to 2016.
* Used the correct ID for the City of Launceston on data.gov.au: `city-of-launceston` instead of `cityoflaunceston`.

### 2017-04-13-updated-2017-05-22

* Fixed broken link to `National Datasets -> Land -> Land Cover`.
* Added `National Datasets -> Social and Economic -> Taxation Statistics 2014-2015`.
* Changed the Taxation Statistics datasets to use a different colour scheme and to default to displaying the "Average taxable income or loss" column.

### 2017-04-13

* Modified `gulp update-lga-filter` to test for `Jurisdiction=Local Government` as opposed to matching a regex and reactivated as part of gulp.

### 2017-03-15-updated-2017-03-20

* Created a catalog group for State of the Environment in the Data Providers group.
* Added a Beta Queeensland Government Group for their new webservices.
* Added `Telecommunications in New Developments` to Communications.
* Restructured `Surface Water` National Dataset and added `Dynamic Hydrology and Marine Layer`.

### 2017-03-15

* Deprecated the old Australian Bureau of Statistics group and instead interspersed ABS items (now based on SDMX-JSON) into National Datasets.  Moved a few existing items into subfolders as appropriate.
* Moved `Agricultural exposure` from `Social and Economic` to `Land`.
* Moved ABS Statistical Boundaries datasets into the Data Providers group.
* Specified the character set for the ABC Photo Stories CSV file in order to fix a problem with incorrect display of unusual characters.

### 2017-02-15-updated-2017-03-07

* Created dga_filter.ejs to tidy data.gov.au query
* Migrated large ex-FIND sources (GA, AIMS, IMOS) to Data Providers.
* Removed erroneous NSW/SA results from data.gov.au
* Added councils missing from lgafilter to dgafilter
* Added `National Datasets -> Health`, and PHN boundaries
* Moved `Medicare Offices` to the `Health` group.

### 2017-02-15-updated-2017-03-02

* Removed `Administrative Boundaries` from the Queensland Government group because the MapServer no longer exists.

### 2017-02-15

* Updated the LGA filter.

### 2017-01-12

* Added new LGAs
* Added in LGAs with zero/protected datasets
* Added new CKAN portal - localdata.net.au
* Respecified Solr query for CKAN portals to include more formats and perform more stably.
* Included more formats explicity for CKANCatalogItem

### 2016-12-02-updated-2017-01-05

* Renamed `National Data Sets` to `National Datasets`.
* Renamed `ABS statistical boundaries` to `ABS Statistical Boundaries`.
* Added New Victorian LGAs.
* Added 2012-13 and 2013-14 Taxation Statistics.
* Updated ABS 2016 Boundaries.
* Updated Taxation Statistics ColorPalettes and ColorBins

### 2016-12-02

* Added Round 2 Mobile Black Spot Program Funded Base Stations, renamed previous dataset to Round 1.
* Updated to 2016 Catchment Scale Land Use.

### 2016-10-13

* Updated list of LGAs from data.gov.au.

### 2016-09-15

* Update 4 GA layers that have moved.

### 2016-08-09

* Update ACT catalog with new layer descriptions.
* Update type of Sunshine Coast Council to esri-group.

### 2016-07-15

* Add 62 layers from the ACT Government.
* Switch to using EJS templates instead of merging JSON files. Much simpler and more flexible.
* Generate a nm_big.json alongside nm.json, which is un-minified.
* Added ABC stories to Communications group.
* Search data.vic.gov.au for KMZs (and GeoJSON and Csv-geo-au, which there aren't any of yet).
* Added ACMA dataset.
* Added Geoscience Australia DEM datasets.
* Added Agricultural Exposure and Building Exposure datasets.
* Added ABS statistical boundary GIS layers from the ABS Esri MapServer.
* Add Local Government top-level group with councils from WA, SA, Vic, Tasmania and QLD.

### 2016-06-15

* Changed the message that is displayed the first time the ACT group is opened.  It now indicates that the data will be back after 1 July.
* Fixed an incorrect legend displayed for several datasets in `Statistical Boundaries`.
* Fixed an incorrect licence displayed for several Tasmanian Government datasets.

### 2016-05-13

* Added `Scanned 1:250K Geological Maps` to `National Data Sets` -> `Land`.
* Added `Commonwealth Electoral Divisions (2016)` to `National Boundaries`.
* Renamed `Commonwealth Electoral Divisions` to `Commonwealth Electoral Divisions (2011)`.

### 2016-04-15-updated-2016-04-28

* Added `Australia 250K Topographic Map 2008` to `National Data Sets` -> `Land`.

### 2016-04-15-updated-2016-04-27

* Updated Western Australia CKAN query to point to "_Public_Services".
* Updated URLs for `Gravity Anomaly` and `Magnetic Intensity` layers in `Land` to point to `services.ga.gov.au`.
* Updated URLs of various datasets in `Framework` to use `services.ga.gov.au`.

### 2016-04-15

* Catalog now used live by NationalMap, hosted on S3: http://static.nationalmap.nicta.com.au/init/2016-04-15.json
