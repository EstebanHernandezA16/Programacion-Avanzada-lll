import { ServicioReservas } from "../services/Servicio.reservas.js"
import { dateParser } from "../utils/dateParser.js"
let servicioReservas = new ServicioReservas()
export class ReservasController{
    constructor(){

    }

    buscarTodas= async(request,response)=>{
        try {
           
            response.status(200).json({
                correcto:true,
                mensaje:'Reservas suministradas con exito',
                datos: await servicioReservas.buscarTodas()
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
            

        // await servicioReservas.buscarById(id)
         console.log(response);
            response.status(200).json({
                correcto:true,
                mensaje:'Reserva suministrada con exito',
                datos: await servicioReservas.buscarById(id)
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
                datos:await servicioReservas.editar(id,data)
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
            
            dateParser(datosRegistrar.fecha_inicio,datosRegistrar.fecha_final)
            console.log(datosRegistrar);
            servicioReservas.registrar(datosRegistrar)
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
            const response = await servicioReservas.eliminar(id)
            console.log(response);
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