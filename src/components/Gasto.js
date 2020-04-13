import React from 'react';
import PropTypes from 'prop-types';

import close from '../assets/svg/close.svg'

const Gasto = ({gasto, eliminarGasto}) => (
    <li className="gastos">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <p>{gasto.nombre}</p>
            <div style={{display:"flex",  alignItems:"center"}}>
                <span style={{backgroundColor: "#004085", padding:".5rem", color:"white", borderRadius:"5px"}}>$ {gasto.cantidad}</span>
                <img src={close} onClick={()=>eliminarGasto(gasto.id)} style={{width:".8em", cursor:"pointer", marginLeft:"1em"}} />
            </div>
        </div>
    </li>
)
 
Gasto.propType = {
    gasto: PropTypes.shape({
        nombre:PropTypes.string.isRequired,
        cantidad:PropTypes.number.isRequired
    })
}

export default Gasto;