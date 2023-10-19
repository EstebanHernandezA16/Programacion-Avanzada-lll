import express from 'express'
import { HabitacionController } from '../controllers/HabitacionController.js';

export const rutasHoteles = express.Router();

const controlador = new HabitacionController()

rutasHoteles


  .get('/habitaciones', controlador.buscarTodas)

  .post('/habitaciones', controlador.registrar)

  .get('/habitacion/:id', controlador.buscarById)

  .put('/habitaciones/:id', controlador.editar)

  .delete('/habitaciones/:id', controlador.eliminar)