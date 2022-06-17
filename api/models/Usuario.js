const mongoose = require('mongoose');
const Plan = require('./Plan');
const Schema  = mongoose.Schema;

const UsuarioSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  nombre: { type: String },
  apellido: { type: String },
  cliente: { type: Boolean },
  empleado: { type: Boolean },
  plan: {type: typeof Plan.schema },
  posicion: {type: typeof {
    type: String,
    coordinates: [Number],
    barrio: String
  }}
});

module.exports = Usuario = mongoose.model('Usuario', UsuarioSchema );
