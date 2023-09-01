
const funcionPrincipal = (usuario,contraseña,funcionSecundaria) =>{
     
    setTimeout(()=> {
        let estadoValidacion = false
        if(usuario==='admin' && contraseña==='admin'){
            estadoValidacion = true
        }
        funcionSecundaria(estadoValidacion)
    },3000)

}

funcionPrincipal('admin','admin',(estado) =>{
    estado==true? console.log('Bienvenido') : console.log('Pago requerido');
})