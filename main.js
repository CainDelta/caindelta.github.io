(function () {
    var myConnector = tableau.makeConnector();

//     myConnector.getSchema = function (schemaCallback) {
//     var cols = [{
//         id: "id",
//         dataType: tableau.dataTypeEnum.string
//     }, {
//         id: "mag",
//         alias: "magnitude",
//         dataType: tableau.dataTypeEnum.float
//     }, {
//         id: "title",
//         alias: "title",
//         dataType: tableau.dataTypeEnum.string
//     }, {
//         id: "location",
//         dataType: tableau.dataTypeEnum.geometry
//     }];
//
//     var tableSchema = {
//         id: "earthquakeFeed",
//         alias: "Earthquakes with magnitude greater than 4.5 in the last seven days",
//         columns: cols
//     };
//
//     schemaCallback([tableSchema]);
// };
// //
//     myConnector.getData = function(table, doneCallback) {
//     $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function(resp) {
//         var feat = resp.features,
//             tableData = [];
//         console.log(resp)
//         // Iterate over the JSON object
//         for (var i = 0, len = feat.length; i < len; i++) {
//             tableData.push({
//                 "id": feat[i].id,
//                 "mag": feat[i].properties.mag,
//                 "title": feat[i].properties.title,
//                 "location": feat[i].geometry
//             });
//         }
//
//         table.appendRows(tableData);
//         doneCallback();
//     });
//   };

    myConnector.getSchema = function (schemaCallback) {
    var cols = [
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

    var tableSchema = {
        id: "NARN",
        alias: "Narn Dataset",
        columns: cols
    };

    schemaCallback([tableSchema]);
    };



    // myConnector.getData = function(table, doneCallback) {
    //
    //   var username = "exnihilonihilfit134@gmail.com"
    //   var password = "35%##s*MFSGMs%H"
    //
    //   $.ajax({
    //       url: "https://capmanagementllc.partner.socrata.com/resource/bby4-tw54.json",
    //       type: "GET",
    //
    //
    //       // headers: {
    //       //     "Authorization": "Basic " + btoa(username + ":" + password)
    //       //   },
    //       dataType: 'jsonp',
    //       headers: {
    //          "Authorization": "Basic ZXhuaWhpbG9uaWhpbGZpdDEzNEBnbWFpbC5jb206MzUlIyNzKk1GU0dNcyVI"
    //        },
    //       data: {
    //         "$$app_token" : "83WwNHqYKhXSgI84G9YfK8xs7"
    //       }
    //   }).done(function(data) {
    //
    //     console.log('passing through')
    //
    //     var feat = data.features,
    //         tableData = [];
    //
    //     // Iterate over the JSON object
    //     for (var i = 0, len = feat.length; i < len; i++) {
    //         tableData.push({
    //             "rrowner3": feat[i].properties.rrowner3,
    //             "carddirect": feat[i].properties.carddirect,
    //             "trkrghts3": feat[i].properties.trkrghts3,
    //             "trkrghts9": feat[i].properties.trkrghts9
    //         });
    //     }
    //
    //     table.appendRows(tableData);
    //     doneCallback();
    //
    //   });
    //
    // };

    myConnector.getData = function(table, doneCallback) {

      $.getJSON("https://tableau-socratas.herokuapp.com/narn", function(resp) {
          var feat = resp,
              tableData = [];

          // Iterate over the JSON object
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

          table.appendRows(tableData);
          doneCallback();
        });


    };
    //

    //
    //
    //
    //
    // };

    tableau.registerConnector(myConnector);
  })();

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Socratas Test API";
        tableau.submit();
    });
});
