const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const PlanSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  nombre: { type: String },
  cantCanales: { type: Number },
  canales: { type: [String] }
},
{collection:'planes'});

module.exports = Plan = mongoose.model('Plan', PlanSchema );
