const express = require('express');
const PlanesController = require('../controllers/planes');

const router = express.Router();

router.get('/', PlanesController.findAllPlanes);
router.get('/:id', PlanesController.findbyId);

module.exports = router;