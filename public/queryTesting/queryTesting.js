
//Get Button which is used to submit data
const subButton = document.getElementById("makeReq");

//EventListener onClick

subButton.addEventListener('click',  event =>{
  
    

    data = {
      name: "Tim",
      nachname: "Deres"
    }
    //Options, with which method, headers the data will come to the API
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        //Prepare the request body
        body: JSON.stringify(data)
    }
    //make the request to the server and safe the response in variable
    fetch("/api", options)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
});


