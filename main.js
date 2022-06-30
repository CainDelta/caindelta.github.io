(function () {

    var schema = [];
    var connectionUri;
    var endpoint_url;
  
    $(document).ready(function () {
  
        //updateUIWithAuthState(hasAuth);
        $("#submitButton2").click(function () {
            accessToken = Cookies.get("accessToken");

            tableau.connectionName = "Socratas  API";
            tableau.connectionData = getEndpointURI()
            console.log("Printing submitting: ",accessToken)
            tableau.submit();
        });
      });
  
      var myConnector = tableau.makeConnector();
  
      // Declare the data to Tableau that we are returning from soda socrata
      myConnector.getSchema = function (schemaCallback) {
  
  
         var endpoint_url = tableau.connectionData;
          // NARN
          if (endpoint_url.includes('bby4-tw54')) {
                narnSchema()

          }
  
          //DOT-FRA-Detailed-Olrik-Dataset
          else if (endpoint_url.includes('uu2z-f857')) {
              dotfraSchema()

          }
          // ASC 2020 with Geometry
          else {
            acsSchema()
  
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
  
      ///main function to download data from the API and passing to Tableau 
      myConnector.getData = function(table, doneCallback) {
  
        endpoint_url = tableau.connectionData
        console.log(endpoint_url)
  
        if((endpoint_url.includes('bby4-tw54'))){
          //added gcp link
            var link = "https://socrata-fastapi-dcojycxoeq-lm.a.run.app/narn"
            getDataNarn(table,link,DoneCallback,doneCallback)

  
        } else if ((endpoint_url.includes('uu2z-f857'))) {

            var url = 'https://socrata-fastapi-dcojycxoeq-lm.a.run.app/dotfra?skip='
            getDataDotfra(table,url,DoneCallback,doneCallback)
 
  
        } else {
           var link = "https://socrata-fastapi-dcojycxoeq-lm.a.run.app/acs"
           getDataAcs(table,link,DoneCallback,doneCallback)

        }

  
      };
  
      tableau.registerConnector(myConnector);
    }) ();
  