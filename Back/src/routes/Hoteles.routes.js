import express from 'express'
import { HabitacionController } from '../controllers/HabitacionController.js';

export const rutasHoteles = express.Router();

const controlador = new HabitacionController()

rutasHoteles


  .get('/', controlador.buscarTodas)

  .post('/', controlador.registrar)

  .get('/:id', controlador.buscarById)

  .put('/:id', controlador.editar)

  .delete('/:id', controlador.eliminar)