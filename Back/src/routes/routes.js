import express from 'express'
import { rutasHoteles } from './Hoteles.routes.js';
import { rutasReservas } from './Reservas.routes.js';


// const controlador = new HabitacionController()


export const enrutador = (app) =>{
    //aqui puedo hacer un log de app a ver si puedo traer el endpoint
    const router = express.Router();
    app.use('/',router)
   
    router.use('/habitaciones', rutasHoteles)
    router.use('/reservas', rutasReservas)
    


}


