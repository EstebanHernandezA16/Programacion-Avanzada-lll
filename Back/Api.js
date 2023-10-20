import express from 'express'
import { rutasHoteles } from './src/routes/Hoteles.routes.js'
import { enrutador } from './src/routes/routes.js'
//Programacion Orientada a Objetos
import { conectarBD } from './src/database/conexion.js'
export class Api{

    constructor(){
        this.app = express()
        this.conectarBD()
        this.enrutarPeticiones()
    }

    // inicializar servidor
    inicializarServidor = () =>{
        this.app.listen(3001, () => console.log('Listening on port 3001'))
    }

    enrutarPeticiones = () =>{
        //pasar this.app a routes.js
        this.app.use(express.json())
        enrutador(this.app)
        // this.app.use('/habitaciones' || '/habitacion', rutasHoteles)
       

    }

    conectarBD(){
        conectarBD()
    }

}