import React, {Fragment} from 'react';
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
 
export default ControlPresupuest;