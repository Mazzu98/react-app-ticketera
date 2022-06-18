const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const BarrioSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  barrio: { type: String },
  comuna: { type: String },
  perimetro: { type: String },
  area: { type: String },
  geometry:{type: typeof {
    type: String,
    coordinates: [[[Number]]]
  }}
});

module.exports = Barrio = mongoose.model('Barrio', BarrioSchema );
