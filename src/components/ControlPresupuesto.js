import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {revisarPresupuesto} from '../helper'

const ControlPresupuest = ({cantidad,restante}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {cantidad}
            </div>
            <div className={revisarPresupuesto(cantidad, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}
 
ControlPresupuest.propType = {
    cantidad: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuest;