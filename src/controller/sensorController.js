const Sensor = require('../models/SensorModel');

exports.postSensorData = async (req, res) => {
  try {
    const sensor = await Sensor.create(req.body);
    res.status(201).json(sensor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSensorData = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.status(200).json(sensors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
