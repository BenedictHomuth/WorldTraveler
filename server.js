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
    var query = "INSERT INTO " + process.env.DB_QUERYTEST + " (" + process.env.DB_QUERYTEST_USERINPUT + ") VALUES ('" + request.body.username + "')";

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
    dbcon.query("SELECT * FROM " + process.env.DB_QUERYTEST, function (err, results, fields) {
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
    var query = "INSERT INTO " + process.env.DB_MARKERS + " (" + process.env.DB_MARKER_LAT + ","+ process.env.DB_MARKER_LON+","+process.env.DB_MARKER_CITYNAME +") VALUES ('" + request.body.lat + "','" + request.body.lon + "','" + request.body.cityName + "')";

    dbcon.query(query, function (err, results, fields) {
        if (err) return response.json({ error: err });

        response.status(200);
    });
});


app.get("/api/getMarker", (request,response) =>{
    var output;
    dbcon.query("SELECT * FROM " + process.env.DB_MARKERS, function (err, results, fields) {
        if (err) throw err;

        var output = [];
        //Trying to meme a JSON.Object 
        //In reality just an array
        for (var i in results) {
            var id = results[i].id;
            var cityName = results[i].name;
            var lat = results[i].lat;
            var lon = results[i].lon;
            var object = { id, lat, lon, cityName };
            output[i] = object;
        }
        response.set('Content-Type', 'application/json');
        response.status(200).send(JSON.stringify(output));
    });
});