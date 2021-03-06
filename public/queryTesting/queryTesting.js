
//Get Button which is used to submit data
const sendBtn = document.getElementById("sendReq");
const reqBtn = document.getElementById("makeReq");

//EventListener onClick
sendBtn.addEventListener('click',  event =>{

    const username = {
      username : document.getElementById("username").value
    };

    //Options, with which method, headers the data will come to the API
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        //Prepare the request body
        body: JSON.stringify(username)
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

reqBtn.addEventListener('click',  event =>{
  fetch("/database")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });
});


