import React, { useState, useEffect } from "react";

import Pregunta from "./Pregunta";
import Form from "./Form";
import ListadoGastos from './ListadoGastos'
import ControlPresupuesto from './ControlPresupuesto'

const GenericHome = (props) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false)

    useEffect(() => {
        if(crearGasto){
            // Agregar el nuevo presupuesto
            setGastos([
                ...gastos,
                gasto
            ])
            // resta del presupuesto actual
            const presupuestoRestante = restante - gasto.cantidad
            guardarRestante(presupuestoRestante)
        }
        // resetear al false
        setCrearGasto(false)
    }, [gasto, crearGasto, gastos, restante])

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
                                setGasto={setGasto}
                                setCrearGasto={setCrearGasto}
                            />
                        </div>
                        <div className="one-half column">
                            <ListadoGastos
                                gastos={gastos}
                            /> 
                            <ControlPresupuesto
                                cantidad={cantidad}
                                restante={restante}
                            />
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
