import express from 'express'
import { HabitacionController } from '../controllers/HabitacionController.js';
// import { rutasHoteles } from './Hoteles.routes';

// const controlador = new HabitacionController()


export const enrutador = (app) =>{
    //aqui puedo hacer un log de app a ver si puedo traer el endpoint
    const router = express.Router();

    app.use('/', () => console.log(app))

    


}


