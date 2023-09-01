const planeta1 ={
    nombre:"4546b",
    volumenAgua: 0.9
}

const planeta2 ={
    nombre:"Tierra",
    volumenAgua:0.05
}

const planetas = [planeta1, planeta2]

const analizarPlanetas = (planetas) =>{
   let total 
    planetas.map((planeta) =>{
        total=total+planeta.volumenAgua
        //continuar
    })
}

