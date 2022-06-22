(function () {

  // var connectionData;
  // var hasAuth;
  var schema = [];
  // var dataToReturn = [];
  var connectionUri;
  // var cols = [];
  // var tableInfo = {};
  // var feat = {};
  var endpoint_url;

  $(document).ready(function () {

      //updateUIWithAuthState(hasAuth);
      $("#submitButton").click(function () {
          tableau.connectionName = "Socratas Test API";
          // connectionData = {
          //     // "max_iterations": 1000,
          //     // "token": accessToken,
          //     "connectionUri": getEndpointURI(),
          // };
          tableau.connectionData = getEndpointURI()
          //console.log('Submit button printing URI ' + JSON.parse(tableau.connectionData)['connectionUri'])

          tableau.submit();
      });
    });

    // This function togglels the label shown depending
    // on whether or not the user has been authenticated
    // function updateUIWithAuthState(hasAuth) {
    //         $("#url").prop('disabled', false);
    //         $("#format").prop('disabled', false);
    //         $("#getsocratadatabutton").prop('disabled', false);
    //         $("#connectbutton").attr('value', 'Authenticated');
    //         $("#connectbutton").css('color', '#1c6f3f');
    //         $(".notsignedin").css('display', 'none');
    //         $(".signedin").css('display', 'block');
    // }

    var myConnector = tableau.makeConnector();

    // Declare the data to Tableau that we are returning from soda socrata
    myConnector.getSchema = function (schemaCallback) {


            var endpoint_url = tableau.connectionData;


        // NARN
        if (endpoint_url.includes('bby4-tw54')) {

            //leave in case we need to implement json option
            /* var col2 = { id: "objectid", dataType: tableau.dataTypeEnum.string};
            var col1 = { id: "the_geom", dataType: tableau.dataTypeEnum.geometry};
            var col3 = { id: "fraarcid", dataType: tableau.dataTypeEnum.string};
            var col4 = { id: "frfranode", dataType: tableau.dataTypeEnum.string};
            var col5 = { id: "tofranode", dataType: tableau.dataTypeEnum.string};
            var col6 = { id: "stfips", dataType: tableau.dataTypeEnum.string};
            var col7 = { id: "cntyfips", dataType: tableau.dataTypeEnum.string};
            var col8 = { id: "stcntyfips", dataType: tableau.dataTypeEnum.string};
            var col9 = { id: "stateab", dataType: tableau.dataTypeEnum.string};
            var col10 = { id: "country", dataType: tableau.dataTypeEnum.string};
            var col11 = { id: "fraregion", dataType: tableau.dataTypeEnum.string};
            var col12 = { id: "rrowner1", dataType: tableau.dataTypeEnum.string};
            var col13 = { id: "yardname", dataType: tableau.dataTypeEnum.string};
            var col14 = { id: "tracks", dataType: tableau.dataTypeEnum.string};
            var col15 = { id: "yardtype", dataType: tableau.dataTypeEnum.string};
            var col16 = { id: "siding", dataType: tableau.dataTypeEnum.string};
            var col17 = { id: "direction", dataType: tableau.dataTypeEnum.string};
            var col18 = { id: "net", dataType: tableau.dataTypeEnum.string};
            var col19 = { id: "miles", dataType: tableau.dataTypeEnum.string};
            var col20 = { id: "km", dataType: tableau.dataTypeEnum.string};
            var col21 = { id: "timezone", dataType: tableau.dataTypeEnum.string};
            var col22 = { id: "shape_leng", dataType: tableau.dataTypeEnum.string};
            var col23 = { id: "shape_stlength", dataType: tableau.dataTypeEnum.string};




            cols = [col1, col2, col3, col4, col5, col6, col7, col8, col9,
                col10, col11, col12, col13, col14, col15, col16, col17,
                col18, col19, col20, col21, col22, col23]; */

           var col1 = { id: "rrowner3", dataType: tableau.dataTypeEnum.string};
            var col2 = { id: "carddirect", dataType: tableau.dataTypeEnum.string};
            var col3 = { id: "trkrghts3", dataType: tableau.dataTypeEnum.string};
            var col4 = { id: "trkrghts9", dataType: tableau.dataTypeEnum.string};
            var col5 = { id: "stfips", dataType: tableau.dataTypeEnum.string};
            var col6 = { id: "fraregion", dataType: tableau.dataTypeEnum.string};
            var col7 = { id: "cntyfips", dataType: tableau.dataTypeEnum.string};
            var col8 = { id: "tofranode", dataType: tableau.dataTypeEnum.string};
            var col9 = { id: "stracnet", dataType: tableau.dataTypeEnum.string};
            var col10 = { id: "trkrghts4", dataType: tableau.dataTypeEnum.string};
            var col11 = { id: "siding", dataType: tableau.dataTypeEnum.string};
            var col12 = { id: "miles", dataType: tableau.dataTypeEnum.float};
            var col13 = { id: "timezone", dataType: tableau.dataTypeEnum.string};
            var col14 = { id: "direction", dataType: tableau.dataTypeEnum.string};
            var col15 = { id: "passngr", dataType: tableau.dataTypeEnum.int};
            var col16 = { id: "country", dataType: tableau.dataTypeEnum.string};
            var col17 = { id: "objectid", dataType: tableau.dataTypeEnum.string};
            var col18 = { id: "frfranode", dataType: tableau.dataTypeEnum.string};
            var col19 = { id: "trkrghts8", dataType: tableau.dataTypeEnum.string};
            var col20 = { id: "net", dataType: tableau.dataTypeEnum.string};
            var col21 = { id: "shape_leng", dataType: tableau.dataTypeEnum.float};
            var col22 = { id: "tracks", dataType: tableau.dataTypeEnum.string};
            var col23 = { id: "rrowner1", dataType: tableau.dataTypeEnum.string};
            var col24 = { id: "fraarcid", dataType: tableau.dataTypeEnum.string};
            var col25 = { id: "trkrghts7", dataType: tableau.dataTypeEnum.string};
            var col26 = { id: "trkrghts1", dataType: tableau.dataTypeEnum.string};
            var col27 = { id: "stateab", dataType: tableau.dataTypeEnum.string};
            var col28 = { id: "rrowner2", dataType: tableau.dataTypeEnum.string};
            var col29 = { id: "subdiv", dataType: tableau.dataTypeEnum.string};
            var col30 = { id: "trkrghts2", dataType: tableau.dataTypeEnum.string};
            var col31 = { id: "yardtype", dataType: tableau.dataTypeEnum.string};
            var col32 = { id: "shape_stlength", dataType: tableau.dataTypeEnum.float};
            var col33 = { id: "trkrghts5", dataType: tableau.dataTypeEnum.string};
            var col34 = { id: "stcntyfips", dataType: tableau.dataTypeEnum.string};
            var col35 = { id: "trkrghts6", dataType: tableau.dataTypeEnum.string};
            var col36 = { id: "km", dataType: tableau.dataTypeEnum.float};
            var col37 = { id: "yardname", dataType: tableau.dataTypeEnum.string};
            var col38 = { id: "geometry", dataType: tableau.dataTypeEnum.geometry};



            cols = [col1, col2, col3, col4, col5, col6, col7, col8, col9,
                col10, col11, col12, col13, col14, col15, col16, col17,
                col18, col19, col20, col21, col22, col23,col24,col25,col26,col27,col28,col29,
                col30,col31,col32,col33,col34,col35,col36,col37,col38];




            tableInfo = {
                id: "NARN",
                alias: "North American Rail Network (NARN)",
                columns: cols
            }
        }

        //DOT-FRA-Detailed-Olrik-Dataset
        else if (endpoint_url.includes('uu2z-f857')) {

            var col1 = { id: "report_year", dataType: "string"};
            var col2 = { id: "activity_discipline", dataType: "string"};
            var col3 = { id: "activity_discipline_name", dataType: "string"};
            var col4 = { id: "ref_county_code", dataType: "string"};
            var col5 = { id: "ref_county_name", dataType: "string"};
            var col6 = { id: "ref_state_code", dataType: "string"};
            var col7 = { id: "ref_state_abb", dataType: "string"};
            var col8 = { id: "ref_state_name", dataType: "string"};
            var col9 = { id: "report_id", dataType: "string"};
            var col10 = { id: "row_id", dataType: "string"};
            var col11 = { id: "source_code_name", dataType: "string"};
            var col12 = { id: "geocode", dataType: "string"};
            var col13 = { id: "from_county_code", dataType: "string"};
            var col14 = { id: "from_county_name", dataType: "string"};
            var col15 = { id: "from_state_name", dataType: "string"};
            var col16 = { id: "from_state_code", dataType: "string"};
            var col17 = { id: "from_city_code", dataType: "string"};
            var col18 = { id: "report_date", dataType: "string"};
            var col19 = { id: "report_no", dataType: "string"};
            var col20 = { id: "payroll_id", dataType: "string"};
            var col21 = { id: "activity", dataType: "string"};
            var col22 = { id: "activity_name", dataType: "string"};

            cols = [col1, col2, col3, col4, col5, col6, col7, col8, col9,
                col10, col11, col12, col13, col14, col15, col16, col17,
                col18, col19, col20, col21, col22];

            tableInfo = {
                id: "DOTFRADetailedOlriktable",
                alias: "DOT-FRA - Detailed Olrik Dataset",
                columns: cols
            }
        }
        // ASC 2020 with Geometry
        else {

            var col1 = { id: "countyns", dataType: tableau.dataTypeEnum.string};
            var col2 = { id: "totalwhite_age", dataType: tableau.dataTypeEnum.int};
            var col3 = { id: "totaltwoormoreracesfemale", dataType: tableau.dataTypeEnum.int};
            var col4 = { id: "classfp", dataType: tableau.dataTypeEnum.string};
            var col5 = { id: "totalotheralone_age", dataType: tableau.dataTypeEnum.int};
            var col6 = { id: "totalblackorafricanamerfemale", dataType: tableau.dataTypeEnum.int};
            var col7 = { id: "name", dataType: tableau.dataTypeEnum.string};
            var col8 = { id: "intptlon", dataType: tableau.dataTypeEnum.string};
            var col9 = { id: "awater", dataType: tableau.dataTypeEnum.string};
            var col10 = { id: "totalblackorafricanamermale", dataType: tableau.dataTypeEnum.int};
            var col11 = { id: "totalotheralonemale_age", dataType: tableau.dataTypeEnum.int};
            var col12 = { id: "totalhispaniclatinomale_age", dataType: tableau.dataTypeEnum.int};
            var col13 = { id: "totalfemalepop_age", dataType: tableau.dataTypeEnum.int};
            var col14 = { id: "mtfcc", dataType: tableau.dataTypeEnum.string};
            var col15 = { id: "totalblackorafricanamer_age", dataType: tableau.dataTypeEnum.int};
            var col16 = { id: "state", dataType: tableau.dataTypeEnum.string};
            var col17 = { id: "aland", dataType: tableau.dataTypeEnum.string};
            var col18 = { id: "totalasain_age", dataType: tableau.dataTypeEnum.int};
            var col19 = { id: "namelsad", dataType: tableau.dataTypeEnum.string};
            var col20 = { id: "statefp", dataType: tableau.dataTypeEnum.string};
            var col21 = { id: "totalamerindianandalaska", dataType: tableau.dataTypeEnum.int};
            var col22 = { id: "totalamerindianandalaska_1", dataType: tableau.dataTypeEnum.int};
            var col23 = { id: "totalwhitefemale_age", dataType: tableau.dataTypeEnum.int};
            var col24 = { id: "totalwhitenothispaniclat", dataType: tableau.dataTypeEnum.int};
            var col25 = { id: "cbsafp", dataType: tableau.dataTypeEnum.string};
            var col26 = { id: "county", dataType: tableau.dataTypeEnum.string};
            var col27 = { id: "intptlat", dataType: tableau.dataTypeEnum.string};
            var col28 = { id: "name_check", dataType: tableau.dataTypeEnum.string};
            var col29 = { id: "csafp", dataType: tableau.dataTypeEnum.string};
            var col30 = { id: "totalwhitenothispaniclat_1", dataType: tableau.dataTypeEnum.int};
            var col31 = { id: "totalpop_age", dataType: tableau.dataTypeEnum.int};
            var col32 = { id: "funcstat", dataType: tableau.dataTypeEnum.string};
            var col33 = { id: "totalmalepop_age", dataType: tableau.dataTypeEnum.int};
            var col34 = { id: "totalwhitemale_age", dataType: tableau.dataTypeEnum.int};
            var col35 = { id: "totalhawaiianandpacislan_1", dataType: tableau.dataTypeEnum.int};
            var col36 = { id: "totalasainmale_age", dataType: tableau.dataTypeEnum.int};
            var col37 = { id: "totaltwoormoreraces_age", dataType: tableau.dataTypeEnum.int};
            var col38 = { id: "totalhispaniclatinofemale", dataType: tableau.dataTypeEnum.int};
            var col39 = { id: "totalamerindianandalaskanative", dataType: tableau.dataTypeEnum.int};
            var col40 = { id: "totalhispaniclatino_age", dataType: tableau.dataTypeEnum.int};
            var col41 = { id: "countyfp", dataType: tableau.dataTypeEnum.string};
            var col42 = { id: "metdivfp", dataType: tableau.dataTypeEnum.string};
            var col43 = { id: "totalhawaiianandpacislander", dataType: tableau.dataTypeEnum.int};
            var col44 = { id: "totalasainfemale_age", dataType: tableau.dataTypeEnum.int};
            var col45 = { id: "totalotheralonefemale_age", dataType: tableau.dataTypeEnum.int};
            var col46 = { id: "totalwhitenothispaniclatino", dataType: tableau.dataTypeEnum.int};
            var col47 = { id: "lsad", dataType: tableau.dataTypeEnum.string};
            var col48 = { id: "geoid", dataType: tableau.dataTypeEnum.string};
            var col49 = { id: "totalhawaiianandpacislan", dataType: tableau.dataTypeEnum.int};
            var col50 = { id: "totaltwoormoreracesmale_age", dataType: tableau.dataTypeEnum.int};
            var col51 = { id: "geometry", dataType: tableau.dataTypeEnum.geometry};


            cols = [col1, col2, col3, col4, col5, col6, col7, col8, col9,
                col10, col11, col12, col13, col14, col15, col16, col17,
                col18, col19, col20, col21, col22, col23, col24, col25, col26,
                col27, col28, col29, col30, col31, col32, col33, col34, col35,
                col36, col37, col38, col39, col40, col41, col42, col43, col44, col45,
                col46, col47, col48, col49, col50, col51];
            tableInfo = {
                id: "ASCgeomatrytable",
                alias: "ASC 2020 with Geometry",
                columns: cols
            }

        }

        schema.push(tableInfo);
        schemaCallback(schema);
    };

    function DoneCallback() {
        alert('Finished Pulling data');
      };
    // gets URL passed into function and this decides which dataset is downloaded
    function getEndpointURI() {
        endpoint_url = document.querySelector('#url').value;
        //console.log('Function getEndpoint running')
        //console.log(endpoint_url)

        //console.log(tableau.connectionData)
        //var url = JSON.parse(tableau.connectionData)['connectionUri']


        if (endpoint_url.includes('fgmd-2f65')) {
            connectionUri = endpoint_url; //+ "?oauth_token=" + accessToken;
        }
        else if (endpoint_url.includes('uu2z-f857')) {
            connectionUri = endpoint_url;// + "?oauth_token=" + accessToken;
        }
        else {
            connectionUri = endpoint_url;// + "?oauth_token=" + accessToken;
        }

        return connectionUri;

    }


    // add the data in manageable chunks
    function chunkData(table, tableData,DoneCallback) {
        var row_index = 0;
        var size = 10000;
        while (row_index < tableData.length) {
            table.appendRows(tableData.slice(row_index, size + row_index));
            row_index += size;
            tableau.reportProgress("Getting row: " + row_index);
            tableau.log("Getting row: " + row_index);
        }
        tableau.log("data pulled");
        DoneCallback();
    }

    // add the data in manageable chunks
    function chunkDataHeavy(table, tableData,DoneCallback) {
        var row_index = 0;
        var size = 1000;
        while (row_index < tableData.length) {
            table.appendRows(tableData.slice(row_index, size + row_index));
            row_index += size;
            tableau.reportProgress("Getting row: " + row_index);
            tableau.log("Getting row: " + row_index);
        }
        tableau.log("data pulled");
        DoneCallback();
    }


    myConnector.getData = function(table, doneCallback) {

      //connectionUri=JSON.parse(tableau.connectionData)['connectionUri'];
      //console.log(connectionUri)
      endpoint_url = tableau.connectionData
      console.log(endpoint_url)

      if((endpoint_url.includes('bby4-tw54'))){
        //added gcp link
        var link = "https://socrata-fastapi-dcojycxoeq-lm.a.run.app/narn"
        $.getJSON(link, function(resp) {
            var feat = resp.features,
                tableData = [];
            console.log(feat)
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({

                   /* 'objectid': feat[i].objectid,
                    'the_geom': feat[i].the_geom,
                    'fraarcid': feat[i].fraarcid,
                    'frfranode': feat[i].frfranode,
                    'tofranode': feat[i].tofranode,
                    'stfips': feat[i].stfips,
                    'cntyfips': feat[i].cntyfips,
                    'stcntyfips': feat[i].stcntyfips,
                    'stateab': feat[i].stateab,
                    'country': feat[i].country,
                    'fraregion': feat[i].fraregion,
                    'rrowner1': feat[i].rrowner1,
                    'yardname': feat[i].yardname,
                    'tracks': feat[i].tracks,
                    'yardtype': feat[i].yardtype,
                    'siding': feat[i].siding,
                    'direction': feat[i].direction,
                    'net': feat[i].net,
                    'miles': feat[i].miles,
                    'km': feat[i].km,
                    'timezone': feat[i].timezone,
                    'shape_leng': feat[i].shape_leng,
                    'shape_stlength': feat[i].shape_stlength */

                    'rrowner3': feat[i].properties.rrowner3,
                    'carddirect': feat[i].properties.carddirect,
                    'trkrghts3': feat[i].properties.trkrghts3,
                    'trkrghts9': feat[i].properties.trkrghts9,
                    'stfips': feat[i].properties.stfips,
                    'fraregion': feat[i].properties.fraregion,
                    'cntyfips': feat[i].properties.cntyfips,
                    'tofranode': feat[i].properties.tofranode,
                    'stracnet': feat[i].properties.stracnet,
                    'trkrghts4': feat[i].properties.trkrghts4,
                    'siding': feat[i].properties.siding,
                    'miles': feat[i].properties.miles,
                    'timezone': feat[i].properties.timezone,
                    'direction': feat[i].properties.direction,
                    'passngr': feat[i].properties.passngr,
                    'country': feat[i].properties.country,
                    'objectid': feat[i].properties.objectid,
                    'frfranode': feat[i].properties.frfranode,
                    'trkrghts8': feat[i].properties.trkrghts8,
                    'net': feat[i].properties.net,
                    'shape_leng': feat[i].properties.shape_leng,
                    'tracks': feat[i].properties.tracks,
                    'rrowner1': feat[i].properties.rrowner1,
                    'fraarcid': feat[i].properties.fraarcid,
                    'trkrghts7': feat[i].properties.trkrghts7,
                    'trkrghts1': feat[i].properties.trkrghts1,
                    'stateab': feat[i].properties.stateab,
                    'rrowner2': feat[i].properties.rrowner2,
                    'subdiv': feat[i].properties.subdiv,
                    'trkrghts2': feat[i].properties.trkrghts2,
                    'yardtype': feat[i].properties.yardtype,
                    'shape_stlength': feat[i].properties.shape_stlength,
                    'trkrghts5': feat[i].properties.trkrghts5,
                    'stcntyfips': feat[i].properties.stcntyfips,
                    'trkrghts6': feat[i].properties.trkrghts6,
                    'km': feat[i].properties.km,
                    'yardname': feat[i].properties.yardname,
                    'geometry': feat[i].geometry


                });
            }
            chunkData(table, tableData,DoneCallback);
            //table.appendRows(tableData);
            doneCallback();
          });

      } else if ((endpoint_url.includes('uu2z-f857'))) {

        var link = "https://socrata-fastapi-dcojycxoeq-lm.a.run.app/dotfra"
        $.getJSON(link, function(resp) {
            var feat = resp,
                tableData = [];
            console.log(feat[0])
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({

                    'report_year': feat[i].report_year,
                    'activity_discipline': feat[i].activity_discipline,
                    'activity_discipline_name': feat[i].activity_discipline_name,
                    'ref_county_code': feat[i].ref_county_code,
                    'ref_county_name': feat[i].ref_county_name,
                    'ref_state_code': feat[i].ref_state_code,
                    'ref_state_abb': feat[i].ref_state_abb,
                    'ref_state_name': feat[i].ref_state_name,
                    'report_id': feat[i].report_id,
                    'row_id': feat[i].row_id,
                    'source_code_name': feat[i].source_code_name,
                    'geocode': feat[i].geocode,
                    'from_county_code': feat[i].from_county_code,
                    'from_county_name': feat[i].from_county_name,
                    'from_state_name': feat[i].from_state_name,
                    'from_state_code': feat[i].from_state_code,
                    'from_city_code': feat[i].from_city_code,
                    'report_date': feat[i].report_date,
                    'report_no': feat[i].report_no,
                    'payroll_id': feat[i].payroll_id,
                    'activity': feat[i].activity,
                    'activity_name': feat[i].activity_name

                });
            }
            chunkData(table, tableData,DoneCallback);
            //table.appendRows(tableData);
            doneCallback();
          });

      } else {
        var link = "https://socrata-fastapi-dcojycxoeq-lm.a.run.app/acs"
        $.getJSON(link, function(resp) {
            var feat = resp.features,
                tableData = [];
            console.log(feat[0])
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    'countyns': feat[i].properties.countyns,
                    'totalwhite_age': feat[i].properties.totalwhite_age,
                    'totaltwoormoreracesfemale': feat[i].properties.totaltwoormoreracesfemale,
                    'classfp': feat[i].properties.classfp,
                    'totalotheralone_age': feat[i].properties.totalotheralone_age,
                    'totalblackorafricanamerfemale': feat[i].properties.totalblackorafricanamerfemale,
                    'name': feat[i].properties.name,
                    'intptlon': feat[i].properties.intptlon,
                    'awater': feat[i].properties.awater,
                    'totalblackorafricanamermale': feat[i].properties.totalblackorafricanamermale,
                    'totalotheralonemale_age': feat[i].properties.totalotheralonemale_age,
                    'totalhispaniclatinomale_age': feat[i].properties.totalhispaniclatinomale_age,
                    'totalfemalepop_age': feat[i].properties.totalfemalepop_age,
                    'mtfcc': feat[i].properties.mtfcc,
                    'totalblackorafricanamer_age': feat[i].properties.totalblackorafricanamer_age,
                    'state': feat[i].properties.state,
                    'aland': feat[i].properties.aland,
                    'totalasain_age': feat[i].properties.totalasain_age,
                    'namelsad': feat[i].properties.namelsad,
                    'statefp': feat[i].properties.statefp,
                    'totalamerindianandalaska': feat[i].properties.totalamerindianandalaska,
                    'totalamerindianandalaska_1': feat[i].properties.totalamerindianandalaska_1,
                    'totalwhitefemale_age': feat[i].properties.totalwhitefemale_age,
                    'totalwhitenothispaniclat': feat[i].properties.totalwhitenothispaniclat,
                    'cbsafp': feat[i].properties.cbsafp,
                    'county': feat[i].properties.county,
                    'intptlat': feat[i].properties.intptlat,
                    'name_check': feat[i].properties.name_check,
                    'csafp': feat[i].properties.csafp,
                    'totalwhitenothispaniclat_1': feat[i].properties.totalwhitenothispaniclat_1,
                    'totalpop_age': feat[i].properties.totalpop_age,
                    'funcstat': feat[i].properties.funcstat,
                    'totalmalepop_age': feat[i].properties.totalmalepop_age,
                    'totalwhitemale_age': feat[i].properties.totalwhitemale_age,
                    'totalhawaiianandpacislan_1': feat[i].properties.totalhawaiianandpacislan_1,
                    'totalasainmale_age': feat[i].properties.totalasainmale_age,
                    'totaltwoormoreraces_age': feat[i].properties.totaltwoormoreraces_age,
                    'totalhispaniclatinofemale': feat[i].properties.totalhispaniclatinofemale,
                    'totalamerindianandalaskanative': feat[i].properties.totalamerindianandalaskanative,
                    'totalhispaniclatino_age': feat[i].properties.totalhispaniclatino_age,
                    'countyfp': feat[i].properties.countyfp,
                    'metdivfp': feat[i].properties.metdivfp,
                    'totalhawaiianandpacislander': feat[i].properties.totalhawaiianandpacislander,
                    'totalasainfemale_age': feat[i].properties.totalasainfemale_age,
                    'totalotheralonefemale_age': feat[i].properties.totalotheralonefemale_age,
                    'totalwhitenothispaniclatino': feat[i].properties.totalwhitenothispaniclatino,
                    'lsad': feat[i].properties.lsad,
                    'geoid': feat[i].properties.geoid,
                    'totalhawaiianandpacislan': feat[i].properties.totalhawaiianandpacislan,
                    'totaltwoormoreracesmale_age': feat[i].properties.totaltwoormoreracesmale_age,
                    'geometry': feat[i].geometry


                });
            }
            chunkDataHeavy(table, tableData,DoneCallback);
            //table.appendRows(tableData);
            doneCallback();
          });
      }







    };




    tableau.registerConnector(myConnector);
  }) ();
