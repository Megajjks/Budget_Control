import React from 'react';
import PropTypes from 'prop-types';

import Gasto from './Gasto'
const ListadoGastos = ({gastos}) => (
    <div className="gastos-realizados">
        <h2 style={{fontWeight:"400"}}>Listado de gastos</h2>
        {gastos.map(gasto=>(
            <Gasto
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
)
 
ListadoGastos.propType = {
    gastos: PropTypes.array.isRequired
}

export default ListadoGastos;