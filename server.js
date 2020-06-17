// Crear servidor Web
const express = require("express");
const bodyParser = require("body-parser")

const appPicossa = express();

appPicossa.use(bodyParser.urlencoded({ extended: true }));

appPicossa.get('/saludo', function(req, res) {
    res.end(`Hola ${req.query.name}`)
});

appPicossa.post('/', function(req, res) {
    res.end(`Hola ${req.body.name}`)
});

appPicossa.listen(3000);