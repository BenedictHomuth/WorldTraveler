const express = require("express");
const app = express();
require("dotenv").config();
const mysql = require("mysql2");


//db connection
const dbcon = mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

dbcon.query("SELECT * FROM " + process.env.DB_TABLENAME, function(err, results, fields){
    console.log(results);
    console.log("\n" + fields);
});

app.listen(3000, () => console.log("listening on port 3000"));

app.use(express.static("public"));

