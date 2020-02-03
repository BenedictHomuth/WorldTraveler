const express = require("express");
const app = express();

app.listen(3000, () => console.log("listening on port 3001"));

app.use(express.static("public"));
app.use(express.static("stuff"));//Test333