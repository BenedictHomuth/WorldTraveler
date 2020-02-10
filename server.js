const express = require("express");
const app = express();
app.use(express.json({type: "application/json"}));
require("dotenv").config();
const mysql = require("mysql2");


const dbcon = mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
/*
dbcon.query("SELECT * FROM " + process.env.DB_TABLENAME, function(err, results, fields){
    console.log(results);
    console.log("\n" + fields);
});
*/
app.listen(3000, () => console.log("listening on port 3000"));

app.use(express.static("public"));
//This allows the server to understand json


//API for transmitting data to DB
app.post("/api", (request, response) =>{

    console.log("I got a request!");
    console.log(request.body);
    
   var username = request.body.username;
   var password = request.body.password;
   var container = {username,password};
    
   //Sends a Status code
   //when .send --> string --> header : text/html
   //when .send --> json / object --> header: application/json
   //automatically
   response.status(202).send(container);
});

//API for retrieving data from DB
app.get("/database", (request, response) =>{

    console.log("I got a DB request!");
    var output;
    dbcon.query("SELECT * FROM " + process.env.DB_TABLENAME, function(err, results, fields){
        if(err) throw err;

       
       output = JSON.stringify(results);
       response.status(220).send(JSON.stringify(output));
    });

   
});

