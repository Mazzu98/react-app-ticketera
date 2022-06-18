const express = require('express');
const UserController = require('../controllers/users');

const router = express.Router();

router.get('/', UserController.findAllUsers);

router.get('/id/:id', UserController.findbyId);

router.get('/find-con-barrios', UserController.findConBarrios);

router.get('/text/:text', UserController.findByText);

router.get('/clientes', UserController.findClientes);

router.get('/clientes2', UserController.findClientes2);

router.get('/clientes-por-zona', UserController.findClientePorZona);

router.get('/mas-de-x-canales/:cant', UserController.cantCanalesMayorA);

router.get('/menos-igual-de-x-canales/:cant', UserController.cantCanalesMenorIgualA);

router.get('/clientes-con-canales', UserController.findClienteConEstosCanales);

router.get('/clientes-por-dnis-apellidos', UserController.findClientesByDnisApellidos);

router.get('/clientes-exepto-apellidos', UserController.findClientesExeptoApellidos);

router.get('/clientes-sin-pack/:pack', UserController.findClientesSinPack);

module.exports = router;