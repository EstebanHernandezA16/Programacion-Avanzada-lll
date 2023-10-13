import { Api } from "./Api.js"
import 'dotenv/config.js'
const servidor = new Api() //instanciando clase

// console.log(process.env);
servidor.inicializarServidor()

