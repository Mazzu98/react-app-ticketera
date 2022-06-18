const express = require('express');
const TicketController = require('../controllers/tickets');

const router = express.Router();

router.get('/', TicketController.findAllUsers);

router.get('/id/:id', TicketController.findbyId);

router.get('/unsolved', TicketController.findUnsolved);

router.get('/atencion-al-cliente', TicketController.findAtencionAlCliente);

router.get('/cant-atenciones', TicketController.findCantAtencionesDeEmpleados);

router.get('/cant-derivaciones/:cant', TicketController.findByCantDerivaciones);

router.get('/clientes-atendidos-por-zona', TicketController.findClientesAtendidosPorZona);

router.get('/empleados-atienden-en-su-barrio', TicketController.findEmpleadosAtiendenEnSuBarrio);

router.get('/clientes-con-tickets-sin-resolver', TicketController.findClienteConTicketSinResolver);

router.get('/cant-tickets-por-cliente', TicketController.findCantTicketsPorCliente);

router.get('/cliente-empleado-genero-ticket', TicketController.findClienteEmpleadoConTicket);








module.exports = router;