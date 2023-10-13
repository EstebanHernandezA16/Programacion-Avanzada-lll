import express from 'express'
import { HabitacionController } from '../controllers/HabitacionController.js';

export const rutasAPI = express.Router();

const controlador = new HabitacionController()

rutasAPI


  .get('/habitaciones', controlador.buscarTodas)

  .post('/habitaciones', controlador.registrar)

  .get('/habitacion/:id', controlador.buscarById)

  .put('/habitaciones/:id', controlador.editar)

  .delete('/habitaciones/:id', controlador.eliminar)