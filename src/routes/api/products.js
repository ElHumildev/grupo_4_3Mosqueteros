const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de todos los actores
router.get('/api/products', productsAPIController.list);
//Detalle del actor
router.get('/api/product/:id', productsAPIController.detail);


module.exports = router;