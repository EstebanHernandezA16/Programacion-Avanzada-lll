


export const dateParser =(fechaIni, fechaFin) =>{
    
    if(fechaIni!=null || fechaFin!=null){
        console.log(`La diferencia de dias es de ${(fechaFin - fechaIni) / 1000 / 60 /60 / 24}`);

        return (fechaFin - fechaIni) / 1000 / 60 /60 / 24
        // milisegundos   sec  min  horas   
    }else{
        return 'Las fechas son obligatorias'
    }


    // let fechaIni = new Date("01/01/2022");
    // let fechaFin = new Date("12/24/2022");


    

    //OJO, fecha Inicio y fecha Fin manda datos de tipo date
    const fIni = '30/04/2002'
    const fFin = '05/05/2002'

    const diaIni = fIni.split('/')[0]
    const diaFin = fFin.split('/')[0]
    
    const mesIni = fIni.split('/')[1]
    const mesFin = fFin.split('/')[1]

    const añoIni = fIni.split('/')[2]
    const añoFin = fFin.split('/')[2]

    console.log(`FechaInicio: ${diaIni}/${mesIni}/${añoIni}`);
    console.log(`FechaFin: ${diaFin}/${mesFin}/${añoFin}`);


    // console.log(`Fechas ${fIni}, ${fFin}`);


}