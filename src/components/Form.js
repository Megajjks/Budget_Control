import React from 'react';
const Form = (props) => {
    return (  
        <form>
            <h2 style={{fontWeight:"400"}}>Agrega tus gastos aquí</h2>
            <div className="campo">
                <label>Nombre de gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
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