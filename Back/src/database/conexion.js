import mongoose from "mongoose";


export const conectarBD = async() =>{
    try {

        await mongoose.connect(process.env.DATABASE)
        console.log('Conexion exitosa');

    } catch (error) {
        console.log(error.message);
    }
}