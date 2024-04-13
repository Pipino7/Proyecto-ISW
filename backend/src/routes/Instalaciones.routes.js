const express = require('express');
const router = express.Router();
const instalacionController = require('../controllers/instalacionController');

// Ruta para obtener todas las instalaciones
router.get('/', instalacionController.obtenerTodasInstalaciones);

// Ruta para obtener una instalación por su ID
router.get('/:id', instalacionController.obtenerInstalacionPorId);

// Ruta para crear una nueva instalación
router.post('/', instalacionController.crearInstalacion);

// Ruta para actualizar una instalación existente
router.put('/:id', instalacionController.actualizarInstalacion);

// Ruta para eliminar una instalación
router.delete('/:id', instalacionController.eliminarInstalacion);

module.exports = router;
