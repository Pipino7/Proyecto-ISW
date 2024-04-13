const mongoose = require('mongoose');

// Definir el esquema para las instalaciones
const instalacionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['cancha', 'gimnasio', 'otro'], // Enumera los tipos de instalaciones disponibles
    required: true
  },
  ubicacion: String,
  cantidadDisponible: {
    type: Number,
    default: 0
  },
  descripcion: String,
  // Otros campos que desees incluir
});

// Crear el modelo de Instalacion basado en el esquema definido
const Instalacion = mongoose.model('Instalacion', instalacionSchema);

// Exportar el modelo para que pueda ser utilizado en otros archivos
module.exports = Instalacion;
