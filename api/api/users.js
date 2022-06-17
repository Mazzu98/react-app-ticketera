const express = require('express');
const UserController = require('../controllers/users');

const router = express.Router();

router.get('/', UserController.findAllUsers);

router.get('/:id', UserController.findbyId);

module.exports = router;