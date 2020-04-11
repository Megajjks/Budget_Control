import React, {useState} from 'react';

import AlertError from './AlertError'
import shortid from 'shortid'

const Form = ({setGasto, setCrearGasto}) => {
    
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    
    const agregarGasto = e =>{
        e.preventDefault();

        // validar
        if( cantidad < 1 || isNaN(cantidad) ||nombre.trim() ===''){
            return setError(true)
        }
        setError(false)
        // Construir el gasto
        const gasto = {
            nombre, //esto lo tomoe del state
            cantidad, //esto lo tomoe del state
            id: shortid.generate()
        }
        // pasar el gasto al componente
        setGasto(gasto)
        setCrearGasto(true)
        // resetiar el form
        setNombre('')
        setCantidad(0)
        return
    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2 style={{fontWeight:"400"}}>Agrega tus gastos aquí</h2>
            {error? <AlertError msg="Uno de los campos es incorrecto"/> : null}
            <div className="campo">
                <label>Nombre de gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}
 
export default Form;