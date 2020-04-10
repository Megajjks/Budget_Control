import React, {Fragment,useState} from 'react';

import AlertError from './AlertError'

const Pregunta = ({guardarCantidad,guardarRestante,actualizarPregunta}) => {

    // definir state
    const [monto, setMonto] = useState(0)
    const [error, setError] = useState(false)

    // Función que lee el presupuesto
    const handleOnChange = e =>{
        setMonto( parseInt(e.target.value, 10))
    }

    const handleOnSubmit = e =>{
        e.preventDefault(); //evitar el comportamiento de recarga de la pagina
        
        if(monto<1 || isNaN(monto)){ //si es menor a 0 o no es un numero
            return setError(true)
        }
        // si se pasa la validación
        guardarCantidad(monto)
        guardarRestante(monto)
        actualizarPregunta(false)
        return setError(false)
    }    
    return (  
        <Fragment>
            <h2 style={{fontWeight:"700"}}>Colaca tu presupuesto</h2>
            {error? <AlertError msg="El presupuesto es incorrecto"/> : null}
            <form
                onSubmit={handleOnSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleOnChange}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;