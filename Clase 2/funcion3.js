//username && pass && confirmPass

//8 carracteres e igualdad

const validarLogin = (username, pass, confirmPass) =>{

    if(pass.length>=8 && confirmPass===pass){
        return `Bienvenido ${username}`
    }else{
        return 'Vuelve a intentarlo'
    }
}


console.log(validarLogin('Esteban','12345678','12345678'));
