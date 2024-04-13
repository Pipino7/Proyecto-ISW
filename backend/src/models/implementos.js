const mongoose = require('mongoose');

const implementoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  cantidadDisponible: { type: Number, default: 0 },
  // Otros campos que consideres necesarios
});

module.exports = mongoose.model('Implemento', implementoSchema);
