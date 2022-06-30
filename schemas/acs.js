
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


function acsSchema() {
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

    return tableInfo
}


//GET DATA ACS 
function getDataAcs(table,link,DoneCallback,doneCallback){
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