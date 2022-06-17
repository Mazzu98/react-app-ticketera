const express = require('express');
const TicketController = require('../controllers/tickets');

const router = express.Router();

router.get('/', TicketController.findAllUsers);

router.get('/:id', TicketController.findbyId);

module.exports = router;