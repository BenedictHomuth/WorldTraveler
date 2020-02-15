const express = require("express");
const app = express();

//This allows the server to understand json
app.use(express.json({type: "application/json"}));
require("dotenv").config();
const mysql = require("mysql2");


const dbcon = mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.listen(3000, () => console.log("listening on port 3000"));

app.use(express.static("public"));

//API for transmitting data to DB
app.post("/api", (request, response) => {
    //DB MAGIC
    var query = "INSERT INTO " + process.env.DB_TABLENAME + " (" + process.env.DB_API_USERINPUT + ") VALUES ('" + request.body.username + "')";

    dbcon.query(query, function (err, results, fields) {
        if (err) return response.json({ error: err });

        var container = {
            username: request.body.username
        };
        response.set('Content-Type', 'application/json');
        response.status(200).send(container);
    });
});

//API for retrieving data from DB
app.get("/database", (request, response) => {

    console.log("I got a DB request!");
    var output;
    dbcon.query("SELECT * FROM " + process.env.DB_TABLENAME, function (err, results, fields) {
        if (err) throw err;

        var output = [];
        //Trying to meme a JSON.Object 
        //In reality just an array
        for (var i in results) {
            var id = results[i].id;
            var name = results[i].name;
            var object = { id, name };
            output[i] = object;
        }
        response.set('Content-Type', 'application/json');
        response.status(200).send(JSON.stringify(output));
    });
});

app.post("/api/safeMarker", (request, response) =>{
    console.log("I will safe the marker");
    console.log("Received data: \n" + request.body.cityName);



    //
    var query = "INSERT INTO " + process.env.DB_TABLENAME + " (" + process.env.DB_API_USERINPUT + ") VALUES ('" + request.body.username + "')";

    dbcon.query(query, function (err, results, fields) {
        if (err) return response.json({ error: err });

        var container = {
            username: request.body.username
        };
        response.set('Content-Type', 'application/json');
        response.status(200).send(container);
    });
})

