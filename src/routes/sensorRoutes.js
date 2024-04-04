const express = require('express');
const router = express.Router();
const sensorController = require('../controller/sensorController');

router.post('/sensorsData', sensorController.postSensorData);
router.get('/data', sensorController.getSensorData);

module.exports = router;
