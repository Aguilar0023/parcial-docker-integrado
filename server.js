const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: 'Alfonso Antonio Cortez Aguilar',
    expediente: '25299',
    codigo_estudiantil: 'CA21-I04-001'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
