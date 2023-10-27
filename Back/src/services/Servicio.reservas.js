import { modeloReservas } from "../models/modelo.reservas.js"

export class ServicioReservas{
    

    constructor(){

    }

    buscarTodas =async() =>  await modeloReservas.find()

    buscarById =async(id) =>  await modeloReservas.findById(id)
    

    editar = async(id,datos) => await modeloReservas.findByIdAndUpdate(id,datos)

    registrar=async(datos)=>{
        let habitacionNueva = new modeloReservas(datos)

        return await habitacionNueva.save()
    }

    eliminar=async(id)=>{
        return await modeloReservas.findByIdAndDelete(id)
    }
}