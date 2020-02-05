//Get Button which is used to submit data
const subButton = document.getElementById("submit");

//EventListener onClick
subButton.addEventListener("click", async event =>{
    //Data which will be send to the DB
    const data = "'name' : 'Deres'";
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
    const response = await fetch("/api", options);
    //extract the json
    const json = await response.json();
    //log the server response
    console.log(json);
});