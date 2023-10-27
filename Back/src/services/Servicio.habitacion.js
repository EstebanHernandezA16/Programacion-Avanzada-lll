import { modeloHabitacion } from "../models/modelo.habitacion.js"

export class ServicioHabitacion{

    constructor(){
    }

    buscarTodas =async() =>  await modeloHabitacion.find()

    buscarById =async(id) =>  await modeloHabitacion.findById(id)
    

    editar = async(id,datos) => await modeloHabitacion.findByIdAndUpdate(id,datos)

    registrar=async(datos)=>{
        let habitacionNueva = new modeloHabitacion(datos)

        return await habitacionNueva.save()
    }

    eliminar=async(id)=>{
        return await modeloHabitacion.deleteOne(id)
    }
}