


export const dateParser =() =>{


    let fechaIni = new Date("01/01/2022");
    let fechaFin = new Date("12/24/2022");


    return(fechaFin.getTime() - fechaIni.getTime()) / 1000 / 60 /60 / 24
                                            // milisegundos   sec  min  horas

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