(function () {
    var myConnector = tableau.makeConnector();


    myConnector.getSchema = function (schemaCallback) {

    //TABLE ONE COLUMNS -- PREVIEW
    var narn_cols = [
      {id: "cntyfips",dataType: tableau.dataTypeEnum.string},
      {id: "country",dataType: tableau.dataTypeEnum.string},
      {id: "direction",dataType: tableau.dataTypeEnum.string},
      {id: "fraarcid",dataType: tableau.dataTypeEnum.string},
      {id: "frfranode",dataType: tableau.dataTypeEnum.string},
      {id: "km",dataType: tableau.dataTypeEnum.string},
      {id: "miles",dataType: tableau.dataTypeEnum.string},
      {id: "net",dataType: tableau.dataTypeEnum.string},
      {id: "objectid",dataType: tableau.dataTypeEnum.string},
      {id: "geometry",dataType: tableau.dataTypeEnum.geometry},
      {id: "carddirect",dataType: tableau.dataTypeEnum.string},
      {id: "rrowner3",dataType: tableau.dataTypeEnum.string},
      {id: "trkrghts3",dataType: tableau.dataTypeEnum.string},
      {id: "trkrghts9",dataType: tableau.dataTypeEnum.string}

              ];

    var narn_tableSchema = {
        id: "NARN",
        alias: "Narn Dataset",
        columns: narn_cols
    };


    //TABLE 2 COLUMNS
    var acs_cols = [
      {id: "name_check",dataType: tableau.dataTypeEnum.string},
      {id: "statefp",dataType: tableau.dataTypeEnum.string},
      {id: "countyfp",dataType: tableau.dataTypeEnum.string},
      {id: "countyns",dataType: tableau.dataTypeEnum.string},
      {id: "geoid",dataType: tableau.dataTypeEnum.string},
      {id: "namelsad",dataType: tableau.dataTypeEnum.string},
      {id: "classfp",dataType: tableau.dataTypeEnum.string},
      {id: "mtfcc",dataType: tableau.dataTypeEnum.string},
      {id: "funcstat",dataType: tableau.dataTypeEnum.string},
      {id: "geometry",dataType: tableau.dataTypeEnum.geometry},
              ];

     var acs_tableSchema = {
         id: "ACS",
         alias: "ACS 2020",
         columns: acs_cols
     };


    schemaCallback([narn_tableSchema,acs_tableSchema]);
    };




    myConnector.getData = function(table, doneCallback) {


      var url = 'https://tableau-socratas.herokuapp.com/narn';
      var url2 = 'https://tableau-socratas.herokuapp.com/acs2020';

      $.when(
          $.getJSON(url),
          $.getJSON(url2)
      ).done(function(result1, result2) {

        var tableData = [];

        if (table.tableInfo.id == "NARN") {
          var feat = result1[0]
              for (var i = 0, len = feat.length; i < len; i++) {
                  tableData.push({
                    "cntyfips":feat[i].cntyfips,
                    "country":feat[i].country,
                    "direction":feat[i].direction,
                    "fraarcid":feat[i].fraarcid,
                    "frfranode":feat[i].frfranode,
                    "km":feat[i].km,
                    "miles":feat[i].miles,
                    "net":feat[i].net,
                    "objectid":feat[i].objectid,
                    "geometry":feat[i].the_geom,
                    "carddirect":feat[i].carddirect,
                    "rrowner3":feat[i].rrowner3,
                    "trkrghts3":feat[i].trkrghts3,
                    "trkrghts9":feat[i].trkrghts9
                  });
              }
          }

         if (table.tableInfo.id == 'ACS') {
           var feat2 = result2[0]
            for (var i = 0, len = feat2.length; i < len; i++) {
                tableData.push({
                  "name_check":feat2[i].name_check,
                  "statefp":feat2[i].statefp,
                  "countyfp":feat2[i].countyfp,
                  "countyns":feat2[i].countyns,
                  "geoid":feat2[i].geoid,
                  "namelsad":feat2[i].namelsad,
                  "classfp":feat2[i].classfp,
                  "mtfcc":feat2[i].mtfcc,
                  "funcstat":feat2[i].funcstat,
                  "geometry":feat2[i].the_geom
                });
            }
          }


        table.appendRows(tableData);
        console.log(tableData)
        doneCallback();

      });



      // $.getJSON("https://tableau-socratas.herokuapp.com/narn", function(resp) {
      //     var feat = resp,
      //         tableData = [];
      //
      //     // Iterate over the JSON object
      //     for (var i = 0, len = feat.length; i < len; i++) {
      //         tableData.push({
      //           "cntyfips":feat[i].cntyfips,
      //           "country":feat[i].country,
      //           "direction":feat[i].direction,
      //           "fraarcid":feat[i].fraarcid,
      //           "frfranode":feat[i].frfranode,
      //           "km":feat[i].km,
      //           "miles":feat[i].miles,
      //           "net":feat[i].net,
      //           "objectid":feat[i].objectid,
      //           "geometry":feat[i].the_geom,
      //           "carddirect":feat[i].carddirect,
      //           "rrowner3":feat[i].rrowner3,
      //           "trkrghts3":feat[i].trkrghts3,
      //           "trkrghts9":feat[i].trkrghts9
      //         });
      //     }
      //
      //     table.appendRows(tableData);
      //     doneCallback();
      //   });


    };


    tableau.registerConnector(myConnector);
  })();

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Socratas Test API";
        tableau.submit();
    });
});
