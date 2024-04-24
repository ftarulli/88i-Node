const express = require('express');
const { crearProducto } = require('../controllers/productoControllers');
const routerProducto = express.Router();

routerProducto.post('/crearProducto', crearProducto);

module.exports = routerProducto;
