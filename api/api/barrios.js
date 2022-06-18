const express = require('express');
const barriosController = require('../controllers/barrios');

const router = express.Router();

router.get('/', barriosController.findAllBarrios);

router.get('/id/:id', barriosController.findbyId);

router.get('/name/:name', barriosController.findbyName);

router.get('/punto', barriosController.findPoint);

router.get('/mas-cercano', barriosController.findBarrioMasCercano);

router.get('/barrios-dentro-del-poligono', barriosController.findBarriosDentroDelPoligono);

module.exports = router;