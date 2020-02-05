//Get Button which is used to submit data
const subButton = document.getElementById("makeReq");

//EventListener onClick

subButton.addEventListener('click',  event =>{
  
    //Data which will be send to the DB
    var a = {
        "name": "Georg",
        "alter": 47,
        "verheiratet": false,
        "beruf": null,
        "kinder": [
          {
            "name": "Lukas",
            "alter": 19,
            "schulabschluss": "Gymnasium"
          },
          {
            "name": "Lisa",
            "alter": 14,
            "schulabschluss": null
          }
        ]
      };
    var b = {
        "name": "Georg",
        "alter": 47,
        "verheiratet": false,
        "beruf": null,
        "kinder": [
          {
            "name": "Lukas",
            "alter": 19,
            "schulabschluss": "Gymnasium"
          },
          {
            "name": "Lisa",
            "alter": 14,
            "schulabschluss": null
          }
        ]
      };

    const data = {a,b};
    //Options, with which method, headers the data will come to the API
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "applicaton/json"
        },
        //Prepare the request body
        body: JSON.stringify(data)
    }
    //make the request to the server and safe the response in variable
    const response = fetch("/api", options);
    //extract the json
    const json = response.json();
    //log the server response
    console.log(json);

});


