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

Mensaje.create = function (newMessage, result) {
  dbConn.query('INSERT INTO mensaje set ?', newMessage, function (err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Mensaje.findById = function (id, result) {
  dbConn.query('SELECT * FROM mensaje WHERE id_mensaje = ?', id, function (err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    else {
      result(null, res);
    };
  });
};

Mensaje.update = function(id, mensaje, result){
  dbConn.query('UPDATE mensaje SET texto_mensaje=?, fecha_mensaje=?, id_usuario=? WHERE id=?', [mensaje.texto_mensaje, mensaje.fecha_mensaje, mensaje.id_usuario, id], function (err,res){
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Mensaje.delete = function(id, result){
  dbConn.query('DELETE FROM mensaje WHERE id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    }
    else {
      result(null, res);
    };
  });
};

module.exports = Mensaje;