import { ServicioHabitacion } from "../services/Servicio.habitacion.js"
import { dateParser } from "../utils/dateParser.js"

export class HabitacionController{

    constructor(){

    }

    buscarTodas=async(request,response)=>{
        try {
            let servicioHabitacion = new ServicioHabitacion()
            
            response.status(200).json({
                correcto:true,
                mensaje:'Habitaciones suministradas con exito',
                datos: await servicioHabitacion.buscarTodas()
            })
        } catch (error) {
            response.status(400).json({
                correcto: false,
                mensaje: `Error en la peticion: ${error.message}`,
                datos: null
            })
            
        }
    }

    buscarById=async(request,response)=>{
        try {
            let servicioHabitacion = new ServicioHabitacion()
            const id = request.params.id

            response.status(200).json({
                correcto:true,
                mensaje:'Habitacion suministrada con exito',
                datos: await servicioHabitacion.buscarById(id)
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
            let servicioHabitacion = new ServicioHabitacion()
            const id = request.params.id
            const data = request.body
            const result =   await servicioHabitacion.editar(id,data)
            response.status(200).json({
                correcto:true,
                mensaje:'Habitacion editada con exito',
                datos:await result.json()
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
            let servicioHabitacion = new ServicioHabitacion()
            const datosRegistrar = request.body
            // console.log(request.body);
            //implementar diferencias de fechas aqui
            dateParser()
            // await servicioHabitacion.registrar(datosRegistrar)
            response.status(200).json({
                correcto:true,
                mensaje:'Habitacion registrada con exito',
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

    eliminar=async(request,response)=>{

        try {
            let servicioHabitacion = new ServicioHabitacion()
            const id = request.params.id
            await servicioHabitacion.eliminar(id)
            response.status(200).json({
                correcto:true,
                mensaje:'Habitacion eliminada con exito',
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