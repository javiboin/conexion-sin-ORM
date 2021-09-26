const Mensaje = require('../models/mensajes.model');

exports.findAll = (req, res) => {
  Mensaje.findAll((err, mensaje) => {
    console.log('controller');
    if (err) res.send(err);
    console.log('res', mensaje);
    res.send(mensaje);
  })
};

