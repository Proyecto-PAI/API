require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const sensorRoutes = require('./src/routes/sensorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, {
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

app.use(express.json());

app.use('/api', sensorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
