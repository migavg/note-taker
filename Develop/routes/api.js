const express = require("express").Router();
const app = express();
const {readFromFile} = require("../helpers/fsUtils");

app.get("/", (req,res)=> {
    readFromFile("./db/db.json").then((data) =>
    res.json(JSON.parse(data))
    );
});

module.exports = app;