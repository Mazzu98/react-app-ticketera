const mongoose = require('mongoose');
const Usuario = require('./Usuario');
const Schema  = mongoose.Schema;

const TicketSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  operacion: { type: String },
  descripcion: { type: String },
  creadoA: { type: Date },
  resuelto: { type: Boolean },
  cliente: {type: typeof Usuario.schema },
  derivaciones: {type: [ typeof {
    area: String,
    operacion: String,
    hora: Date,
    empleado: {type: typeof Usuario.schema },
    barrio: String
  }]}
});

module.exports = Ticket = mongoose.model('Ticket', TicketSchema );
