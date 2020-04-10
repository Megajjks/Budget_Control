import React, { useState } from "react";

import Pregunta from "./Pregunta";
import Form from "./Form";
import { render } from "@testing-library/react";

const GenericHome = (props) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

    // Cuando agreguemos un nuevo gasto
    const agregarNuevoGasto = gasto =>{
        setGastos([
            ...gastos,
            gasto
        ])
    }

  return (
    <div className="container">
      <header>
        <div>
          <h1 style={{ fontWeight: "700" }}>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {mostrarPregunta ?  
                (<Pregunta
                    guardarCantidad={guardarCantidad}
                    guardarRestante={guardarRestante}
                    actualizarPregunta={actualizarPregunta}
                  />)
            : 
                (
                    <div className="row">
                        <div className="one-half column">
                            <Form 
                                agregarNuevoGasto={agregarNuevoGasto}
                            />
                        </div>
                        <div className="one-half column">
                            2 
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </header>
    </div>
  );
};

export default GenericHome;
