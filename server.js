// Crear servidor Web
const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require('mysql2');
const sequelize = require('sequelize');

const appPicossa = express();

// Motor de vistas
appPicossa.set('view engine', 'ejs');

// servir archivos estaticos
appPicossa.use('/assets', express.static('assets'));

// ruta del controlador de productos
const Products = require('./controllers/produts');

// nota

appPicossa.use(bodyParser.urlencoded({ extended: true }));



// Rutas
appPicossa.get('/', function(req, res) {
    res.render('productos')
});

appPicossa.get('/productos', function(req, res) {
    res.render('productos')
});
appPicossa.get('/ventas', function(req, res) {
    res.render('ventas')
});

appPicossa.get('/compras', function(req, res) {
    res.render('compras')
});

appPicossa.get('/estadosfinancieros', function(req, res) {
    res.render('estadosfinancieros')
});

appPicossa.listen(4000);