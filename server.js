const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'parcial_db',
  port: 5432
};

app.get('/', async (req, res) => {
  try {
    const client = new Client(dbConfig);
    await client.connect();
    const result = await client.query('SELECT * FROM estudiantes');
    await client.end();
    
    res.json({
      estudiante: {
        nombre: 'Alfonso Antonio Cortez Aguilar',
        expediente: '25299',
        codigo_estudiantil: 'CA21-I04-001'
      },
      datos_db: result.rows,
      message: 'Conexión a PostgreSQL exitosa'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
