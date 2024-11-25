const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));


// SET DATOS
app.get('/api/getdatatable', (req, res) => {
  const data = [
    { id: 1, nombre: 'POST 1', descripcion: 'Descripción 1' },
    { id: 2, nombre: 'POST 2', descripcion: 'Descripción 2' },
    { id: 3, nombre: 'POST 3', descripcion: 'Descripción 3' },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});