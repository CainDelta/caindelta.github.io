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

            
            var col2 = { id: "objectid", dataType: tableau.dataTypeEnum.string};
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
                col18, col19, col20, col21, col22, col23];
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
            var col1 = { id: "totalpop_age", dataType: "string" };
            var col2 = { id: "totalmalepop_age", dataType: "string" };
            var col3 = { id: "totalfemalepop_age", dataType: "string" }
            var col4 = { id: "totalwhite_age", dataType: "string" }
            var col5 = { id: "totalwhitemale_age", dataType: "string" }
            var col6 = { id: "totalwhitefemale_age", dataType: "string" }
            var col7 = { id: "totalblackorafricanamer_age", dataType: "string" }
            var col8 = { id: "totalblackorafricanamermale", dataType: "string" }
            var col9 = { id: "totalblackorafricanamerfemale", dataType: "string" }
            var col10 = { id: "totalamerindianandalaskanative", dataType: "int" }
            var col11 = { id: "totalamerindianandalaska", dataType: "string" }
            var col12 = { id: "totalamerindianandalaska_1", dataType: "string" }
            var col13 = { id: "totalasain_age", dataType: "string" }
            var col14 = { id: "totalasainmale_age", dataType: "string" }
            var col15 = { id: "totalasainfemale_age", dataType: "string" }
            var col16 = { id: "totalhawaiianandpacislander", dataType: "string" }
            var col17 = { id: "totalhawaiianandpacislan", dataType: "string" }
            var col18 = { id: "totalhawaiianandpacislan_1", dataType: "string" }
            var col19 = { id: "totalotheralone_age", dataType: "string" }
            var col20 = { id: "totalotheralonemale_age", dataType: "string" }
            var col21 = { id: "totalotheralonefemale_age", dataType: "string" }
            var col22 = { id: "totaltwoormoreraces_age", dataType: "string" }
            var col23 = { id: "totaltwoormoreracesmale_age", dataType: "string" }
            var col24 = { id: "totaltwoormoreracesfemale", dataType: "string" }
            var col25 = { id: "totalwhitenothispaniclatino", dataType: "string" }
            var col26 = { id: "totalwhitenothispaniclat", dataType: "string" }
            var col27 = { id: "totalwhitenothispaniclat_1", dataType: "string" }
            var col28 = { id: "totalhispaniclatino_age", dataType: "string" }
            var col29 = { id: "totalhispaniclatinomale_age", dataType: "string" }
            var col30 = { id: "totalhispaniclatinofemale", dataType: "string" }
            var col31 = { id: "name", dataType: "string" }
            var col32 = { id: "state", dataType: "string" }
            var col33 = { id: "county", dataType: "string" }
            var col34 = { id: "name_check", dataType: "string" }
            var col35 = { id: "the_geom", dataType: "string" }
            var col36 = { id: "statefp", dataType: "string" }
            var col37 = { id: "countyfp", dataType: "string" }
            var col38 = { id: "countyns", dataType: "string" }
            var col39 = { id: "geoid", dataType: "string" }
            var col40 = { id: "namelsad", dataType: "string" }
            var col41 = { id: "lsad", dataType: "string" }
            var col42 = { id: "classfp", dataType: "string" }
            var col43 = { id: "mtfcc", dataType: "string" }
            var col44 = { id: "csafp", dataType: "string" }
            var col45 = { id: "cbsafp", dataType: "string" }
            var col46 = { id: "metdivfp", dataType: "string" }
            var col47 = { id: "funcstat", dataType: "string" }
            var col48 = { id: "aland", dataType: "float" }
            var col49 = { id: "awater", dataType: "float" }
            var col50 = { id: "intptlat", dataType: "string" }
            var col51 = { id: "intptlon", dataType: "string" }

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


    myConnector.getData = function(table, doneCallback) {

      //connectionUri=JSON.parse(tableau.connectionData)['connectionUri'];
      //console.log(connectionUri)
      endpoint_url = tableau.connectionData
      console.log(endpoint_url)

      if((endpoint_url.includes('bby4-tw54'))){

        var link = "https://tableau-socratas.herokuapp.com/narn"
        $.getJSON(link, function(resp) {
            var feat = resp.results,
                tableData = [];
            console.log(feat)
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                   
                    'objectid': feat[i].objectid,
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
                    'shape_stlength': feat[i].shape_stlength
   
                });
            }
            chunkData(table, tableData,DoneCallback);
            //table.appendRows(tableData);
            doneCallback();
          });

      } else if ((endpoint_url.includes('uu2z-f857'))) {

        var link = "https://tableau-socratas.herokuapp.com/dotfra"
        $.getJSON(link, function(resp) {
            var feat = resp.results,
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
        var link = "https://tableau-socratas.herokuapp.com/acs"
        $.getJSON(link, function(resp) {
            var feat = resp.results,
                tableData = [];
            console.log(feat[0])
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                  'OBJECTID': feat[i].objectid,
                  'TotalPop_Age': feat[i].totalpop_age,
                  'TotalMalePop_Age': feat[i].totalmalepop_age,
                  'TotalFemalePop_Age': feat[i].totalfemalepop_age,
                  'TotalWhite_Age': feat[i].totalwhite_age,
                  'TotalWhiteMale_Age': feat[i].totalwhitemale_age,
                  'TotalWhiteFemale_Age': feat[i].totalwhitefemale_age,
                  'TotalBlackorAfricanAmer_Age': feat[i].totalblackorafricanamer_age,
                  'TotalBlackorAfricanAmerMale_Age': feat[i].totalblackorafricanamermale,
                  'TotalBlackorAfricanAmerFemale_Age': feat[i].totalblackorafricanamerfemale,
                  'TotalAmerIndianAndAlaskaNative_Age': feat[i].totalamerindianandalaskanative,
                  'TotalAmerIndianAndAlaskaNativeMale_Age': feat[i].totalamerindianandalaskanative,
                  'TotalAmerIndianAndAlaskaNativeFemale_Age': feat[i].totalamerindianandalaska_1,
                  'TotalAsain_Age': feat[i].totalasain_age,
                  'TotalAsainMale_Age': feat[i].totalasainmale_age,
                  'TotalAsainFemale_Age': feat[i].totalasainfemale_age,
                  'TotalHawaiianAndPacIslander_Age': feat[i].totalhawaiianandpacislander,
                  'TotalHawaiianAndPacIslanderMale_Age': feat[i].totalhawaiianandpacislan,
                  'TotalHawaiianAndPacIslanderFemale_Age': feat[i].totalhawaiianandpacislan_1,
                  'TotalOtherAlone_Age': feat[i].totalotheralone_age,
                  'TotalOtherAloneMale_Age': feat[i].totalotheralonemale_age,
                  'TotalOtherAloneFemale_Age': feat[i].totalotheralonefemale_age,
                  'TotalTwoOrMoreRaces_Age': feat[i].totaltwoormoreraces_age,
                  'TotalTwoOrMoreRacesMale_Age': feat[i].totaltwoormoreracesmale_age,
                  'TotalTwoOrMoreRacesFemale_Age': feat[i].totaltwoormoreracesfemale,
                  'TotalWhiteNotHispanicLatino_Age': feat[i].totalwhitenothispaniclatino,
                  'TotalWhiteNotHispanicLatinoMale_Age': feat[i].totalwhitenothispaniclat,
                  'TotalWhiteNotHispanicLatinoFemale_Age': feat[i].totalwhitenothispaniclat_1,
                  'TotalHispanicLatino_Age': feat[i].totalhispaniclatino_age,
                  'TotalHispanicLatinoMale_Age': feat[i].totalhispaniclatinomale_age,
                  'TotalHispanicLatinoFemale_Age': feat[i].totalhispaniclatinofemale,
                  'NAME': feat[i].name,
                  'state': feat[i].state,
                  'county': feat[i].county,
                  'NameCheck': feat[i].name_check,
                  'the_geom': feat[i].the_geom,
                  'statefp': feat[i].statefp,
                  'countyfp': feat[i].countyfp,
                  'countyns': feat[i].countyns,
                  'geoid': feat[i].geoid,
                  'namelsad': feat[i].namelsad,
                  'lsad': feat[i].lsad,
                  'classfp': feat[i].classfp,
                  'mtfcc': feat[i].mtfcc,
                  'csafp': feat[i].csafp,
                  'cbsafp': feat[i].cbsafp,
                  'metdivfp': feat[i].metdivfp,
                  'funcstat': feat[i].funcstat,
                  'aland': feat[i].aland,
                  'awater': feat[i].awater,
                  'intptlat': feat[i].intptlat,
                  'intptlon': feat[i].intptlon
                });
            }
            chunkData(table, tableData,DoneCallback);
            //table.appendRows(tableData);
            doneCallback();
          });
      }







    };




    tableau.registerConnector(myConnector);
  }) ();
