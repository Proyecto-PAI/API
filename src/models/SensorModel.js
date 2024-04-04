const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  actual_date: String,
  air_temperature: Number,
  air_humidity: Number,
  floor_sensor1: Number,
  floor_sensor2: Number
});

module.exports = mongoose.model('Sensor', sensorSchema);
