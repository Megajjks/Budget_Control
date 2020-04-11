import React from 'react';
import PropTypes from 'prop-types';

const AlertError = ({msg}) => (
    <p className="alert alert-danger error">{msg}</p>
)
 
AlertError.propType = {
    msg: PropTypes.string.isRequired
}

export default AlertError;