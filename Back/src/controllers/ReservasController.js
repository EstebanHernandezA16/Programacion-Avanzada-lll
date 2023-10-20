import { ServicioReservas } from "../services/Servicio.reservas.js"

export class ReservasController{
    constructor(){}

    buscarTodas= async(request,response)=>{
        try {
            response.status(200).json({
                correcto:true,
                mensaje:'Reservas suministradas con exito',
                datos:'info'
            })
        } catch (error) {
            response.status(400).json({
                correcto: false,
                mensaje: `Error en la peticion: ${error.message}`,
                datos: null
            })
            
        }
    }

    buscarById= async(request,response)=>{
        try {
            const id = request.params.id
            


            response.status(200).json({
                correcto:true,
                mensaje:'Reserva suministrada con exito',
                datos:'info'
            })

        } catch (error) {
            response.status(400).json({
                correcto:false,
                mensaje:`Error en la peticion: ${error.message}`,
                datos:null
            })
            
        }
        

       

    }

    editar=async(request,response)=>{
        try {
            const id = request.params.id
            const data = request.body

            response.status(200).json({
                correcto:true,
                mensaje:'Reserva editada con exito',
                datos:null
            })

        } catch (error) {
            response.status(400).json({
                correcto:false,
                mensaje:`Error en la peticion: ${error.message}`,
                datos:null
            })
            
        }

    }

    registrar=async(request,response)=>{
          
        try {
            
            const datosRegistrar = request.body

            response.status(200).json({
                correcto:true,
                mensaje:'Registrar registrada con exito',
                datos:null
            })
            
        } catch (error) {
            response.status(400).json({
                correcto:false,
                mensaje:`Error en la peticion: ${error.message}`,
                datos:null
            })
            
        }

    }

    eliminar= async(request,response)=>{

        try {
            const id = request.params.id

            response.status(200).json({
                correcto:true,
                mensaje:'Reserva eliminada con exito',
                datos:null
            })
            
        } catch (error) {
            response.status(400).json({
                correcto:false,
                mensaje:`Error en la peticion: ${error.message}`,
                datos:null
            })
            
        }

    }



}