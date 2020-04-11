import React, {useState} from 'react';
import PropTypes from 'prop-types';

import AlertError from './AlertError'
import shortid from 'shortid'

const Form = ({setGasto, setCrearGasto, restante}) => {
    
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    const [msgError, setMsgError] = useState('')
    
    const agregarGasto = e =>{
        e.preventDefault();

        // validar los datos introducidos
        if( cantidad < 1 || isNaN(cantidad) ||nombre.trim() ===''){
            setMsgError('Uno de los campos es incorrecto')
            setError(true)
            return
        }
        // validar que haya capacidad
        if(cantidad > restante){
            setMsgError('Monto insuficiente, no se puede realizar el Gasto')
            setError(true)
            return
        }

        setError(false)
        // Construir el gasto
        let date = new Date()
        const gasto = {
            nombre, //esto lo tomoe del state
            cantidad, //esto lo tomoe del state
            id: shortid.generate(),
            date:`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            time:`${date.getHours()}:${date.getMinutes()}`
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
            {error? <AlertError msg={msgError}/> : null}
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
 
Form.propType = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Form;