import express from 'express'
import { rutasAPI } from './src/routes/Hoteles.routes.js'
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
        this.app.use('/', rutasAPI)
        this.app.use(express.json())

    }

    conectarBD(){
        conectarBD()
    }

}