// Crear servidor Web
const express = require("express");
const bodyParser = require("body-parser");

const appPicossa = express();

// servir archivos estaticos

appPicossa.use('/assets', express.static('assets'));

appPicossa.use(bodyParser.urlencoded({ extended: true }));

appPicossa.get('/saludo', function(req, res) {
    res.end(`Hola ${req.query.name}`)
});

appPicossa.get('/', function(req, res) {
    res.sendFile('productos.html', {
        root: __dirname
    })
});

appPicossa.listen(3000);