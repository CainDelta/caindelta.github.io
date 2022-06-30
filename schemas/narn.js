
       
    // add the data in manageable chunks
    function chunkData(table, tableData,size,DoneCallback) {
        var row_index = 0;
        //var size = 50000;
        while (row_index < tableData.length) {
            table.appendRows(tableData.slice(row_index, size + row_index));
            row_index += size;
            tableau.reportProgress("Getting row: " + row_index);
            tableau.log("Getting row: " + row_index);
        }
        tableau.log("data pulled");
        DoneCallback();
    } 
       
    //DEFINE SCHEMAS BY DATASET
    function narnSchema(){
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
        return tableInfo
    }


    ///GET DATA FUNCTION 
    function getDataNarn(table,link,DoneCallback,doneCallback){
        $.getJSON(link, function(resp) {
            var feat = resp.features,
                tableData = [];
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
    
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
            chunkData(table, tableData,50000,DoneCallback);
            //table.appendRows(tableData);
            doneCallback();
          });

    }

