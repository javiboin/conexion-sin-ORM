const express = require('express');
const app = express();

const PORT = process.env.PORT || 3027;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Server');
});

const mensajeRoutes = require('./routes/mensaje.route');
app.use('/api/v1/mensajes', mensajeRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});