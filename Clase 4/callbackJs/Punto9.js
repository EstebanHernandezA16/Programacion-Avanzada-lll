


const crearPadawan = (nombre,planeta,edad,estatura, clasificarPadawan) =>{

    setTimeout(()=>{
        let padawan = {
            nombre,
            planeta,
            edad,
            estatura,
        }
        clasificarPadawan(padawan)
    }, 2000)

}


crearPadawan('Murork','4546B',14,'1.23cm',(padawan) =>{
    padawan.edad<15? console.log(`${padawan.nombre} tienes ${padawan.edad} años y por eso vas a la clase manejo de la fuerza`) : console.log(`${padawan.nombre} tienes ${padawan.edad} años y por eso vas a la clase de manejo del sable obvio de luz`);
})