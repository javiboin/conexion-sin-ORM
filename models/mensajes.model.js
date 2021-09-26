const dbConn = require('../config/db.config');

const Mensaje = function(mensaje){
  this.texto_mensaje = mensaje.texto_mensaje;
  this.fecha_mensaje = new Date();
  this.id_usuario = mensaje.id_usuario;
}

Mensaje.findAll = result => {
  dbConn.query('SELECT * FROM mensaje', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    }
    else {
      console.log('mensaje: ', res);
      result(null, res);
    }
  });
};

module.exports = Mensaje;