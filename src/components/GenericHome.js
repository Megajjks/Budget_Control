import React, { useState } from "react";

import Pregunta from "./Pregunta";
import Form from "./Form";

const GenericHome = (props) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1 style={{ fontWeight: "700" }}>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            guardarCantidad={guardarCantidad}
            guardarRestante={guardarRestante}
          />

          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">
                2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default GenericHome;
