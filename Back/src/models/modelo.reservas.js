import mongoose from "mongoose";

const Schema = mongoose.Schema

const reserva = new Schema({
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    fecha_inicio:{
        type:Date,
        required:true
    },
    fecha_final:{
        type:Date,
        required:true
    },
    num_personas:{
        type:Number,
        required:true
    },

})


export const modeloReservas = mongoose.model('reservas', reserva)