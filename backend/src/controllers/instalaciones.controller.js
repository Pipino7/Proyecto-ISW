// Importar el modelo de Instalación
const Instalacion = require('../models/instalacion');

// Controlador para manejar todas las operaciones relacionadas con las instalaciones
const instalacionController = {
    // Obtener todas las instalaciones
    obtenerTodasInstalaciones: async (req, res) => {
        try {
            const instalaciones = await Instalacion.find();
            res.json(instalaciones);
        } catch (error) {
            console.error('Error al obtener todas las instalaciones:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    },

    // Obtener una instalación por su ID
    obtenerInstalacionPorId: async (req, res) => {
        const { id } = req.params;
        try {
            const instalacion = await Instalacion.findById(id);
            if (!instalacion) {
                return res.status(404).json({ mensaje: 'Instalación no encontrada' });
            }
            res.json(instalacion);
        } catch (error) {
            console.error('Error al obtener la instalación por ID:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    },

    // Crear una nueva instalación
    crearInstalacion: async (req, res) => {
        const { nombre, tipo, ubicacion, cantidadDisponible } = req.body;
        try {
            const nuevaInstalacion = new Instalacion({ nombre, tipo, ubicacion, cantidadDisponible });
            await nuevaInstalacion.save();
            res.status(201).json({ mensaje: 'Instalación creada exitosamente', instalacion: nuevaInstalacion });
        } catch (error) {
            console.error('Error al crear la instalación:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    },

    // Actualizar una instalación existente
    actualizarInstalacion: async (req, res) => {
        const { id } = req.params;
        const { nombre, tipo, ubicacion, cantidadDisponible } = req.body;
        try {
            const instalacionActualizada = await Instalacion.findByIdAndUpdate(id, { nombre, tipo, ubicacion, cantidadDisponible }, { new: true });
            if (!instalacionActualizada) {
                return res.status(404).json({ mensaje: 'Instalación no encontrada' });
            }
            res.json({ mensaje: 'Instalación actualizada exitosamente', instalacion: instalacionActualizada });
        } catch (error) {
            console.error('Error al actualizar la instalación:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    },

    // Eliminar una instalación
    eliminarInstalacion: async (req, res) => {
        const { id } = req.params;
        try {
            const instalacionEliminada = await Instalacion.findByIdAndDelete(id);
            if (!instalacionEliminada) {
                return res.status(404).json({ mensaje: 'Instalación no encontrada' });
            }
            res.json({ mensaje: 'Instalación eliminada exitosamente', instalacion: instalacionEliminada });
        } catch (error) {
            console.error('Error al eliminar la instalación:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }
};

module.exports = instalacionController;
