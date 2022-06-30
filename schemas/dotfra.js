

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

//FUNCTION DEFINE SCHEM AND DATATYPE 
function dotfraSchema(){
      
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
    return tableInfo
}


///FUNCTION GET DATA 
function getDataDotfra(table,url,DoneCallback,doneCallback) {
    var skip = 0;
    var limit = 250000;

    for (var i = 0, len = 10; i < len; i++){
        var link = url + skip + '&limit=' + limit
        console.log(link)
        $.ajax({

            url : link,
            async : false,
            success :function(data){
            var feat = data,
                tableData = [];

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
                    //table.appendRows(tableData)
                    chunkData(table,tableData,50000,DoneCallback)
                    skip += limit
            }


        });
    }
    doneCallback();
}