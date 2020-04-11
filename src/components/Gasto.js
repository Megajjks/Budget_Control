import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">$ {gasto.cantidad}</span>
        </p>
    </li>
)
 
Gasto.propType = {
    gasto: PropTypes.shape({
        nombre:PropTypes.string.isRequired,
        cantidad:PropTypes.number.isRequired
    })
}

export default Gasto;