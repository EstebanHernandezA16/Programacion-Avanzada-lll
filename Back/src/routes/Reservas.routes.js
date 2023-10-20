import express from 'express'
import { ReservasController } from '../controllers/ReservasController.js';

export const rutasReservas = express.Router();

const controlador = new ReservasController()

rutasReservas


  .get('/', controlador.buscarTodas)

  .post('/', controlador.registrar)

  .get('/:id', controlador.buscarById)

  .put('/:id', controlador.editar)

  .delete('/:id', controlador.eliminar)


