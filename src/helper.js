export const revisarPresupuesto = (presupuesto, restante) =>{
    let clase

    if((presupuesto/4) > restante){
        clase = 'alert alert-danger'
    } else if( (presupuesto/2) > restante){
        clase = 'alert alert-warning'
    }else{
        clase = 'alert alert-success'
    }
    return clase
}

export const gastoToGrapic = (gasto) =>{
    let g ={
        id:gasto.nombre,
        label:gasto.nombre,
        value:gasto.cantidad
    }
    return g
}