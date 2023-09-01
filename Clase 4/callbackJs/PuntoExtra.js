//array de 5 {} con tematica de comidas

//{id:1,nombre:'',tipo:'', precio:$}

//filtrar comidas que sean mas caras de 50

//pasar arreglo a un callback

//que se encarga de sumar el costo total de las comidas y retornar sumatoria


const arreglo=[{
    id:1,
nombre:'Hamburguesa',
tipo:'rapida',
precio:50000},
{
    id:2,
nombre:'Perro',
tipo:'rapida',
precio:30000},
{
    id:3,
nombre:'Perra',
tipo:'rapida',
precio:70000},
{
    id:4,
nombre:'Hamburguesa',
tipo:'artesanal',
precio:100000},
{
    id:5,
nombre:'Pollo',
tipo:'artesanal',
precio:50000}]


const filtrarComidas = (arreglo, sumarComidas) =>{
    let arregloFiltrado =[]
    
    arreglo.map((objeto)=>{
        objeto.precio>50000 && arregloFiltrado.push(objeto)
    })

   const sumatoria = sumarComidas(arregloFiltrado);

   console.log('La sumatoria de comidas es igual a '+sumatoria);

}


filtrarComidas(arreglo,(arregloFiltrado) =>{
    let sumatoria
    arregloFiltrado.map((objeto)=>{
        sumatoria = sumatoria + objeto.precio
    })

    return sumatoria
})
