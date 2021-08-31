const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesController');

router.get('/', routesController.index);
router.get('/login', routesController.login);
router.get('/carrito', routesController.productCart);
router.get('/detalles', routesController.productDetail);
router.get('/register', routesController.register);
router.get('/agregar', routesController.newProduct);
router.get('/editar', routesController.editProduct);

module.exports = router;