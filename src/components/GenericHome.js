import React, {Fragment, useState, useEffect } from "react";

import Pregunta from "./Pregunta";
import Form from "./Form";
import ListadoGastos from './ListadoGastos';
import ControlPresupuesto from './ControlPresupuesto';
import GraphicPie from './graphs/GraphicPie';
import { gastoToGrapic } from '../helper';

import arrow from '../assets/svg/arrow_back.svg'

const GenericHome = (props) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [dataGrapihc, setDataGrapihc] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);

    useEffect(() => {
        if(crearGasto){
            // Agregar el nuevo presupuesto
            setGastos([
                ...gastos,
                gasto
            ])
            // Agregamos el conjunto de datos para el grafico
            setDataGrapihc([
              ...dataGrapihc,
              gastoToGrapic(gasto)
            ])
            // resta del presupuesto actual
            const presupuestoRestante = restante - gasto.cantidad
            guardarRestante(presupuestoRestante)
        }
        // resetear al false
        setCrearGasto(false)
    }, [gasto, crearGasto, gastos, restante])

    // regresar a la pregunta
    const goBack = () =>{
      // reinicio valores a default
      actualizarPregunta(true)
      guardarCantidad(0)
      guardarRestante(0)
      setGastos([])
      return
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
                  />
                  )
            : 
                (
                  <Fragment>
                    <img onClick={goBack} src={arrow} style={{width:"1.5em", cursor:"pointer"}} />
                    <div className="row">
                        <div className="one-half column">
                            <Form 
                                setGasto={setGasto}
                                setCrearGasto={setCrearGasto}
                                restante={restante}
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
                        <div className="u-full-width column">
                            <h2 style={{fontWeight:"400", textAlign:"center"}}>Representación de tus gastos</h2>
                            <GraphicPie data={dataGrapihc} className="algo"/>
                        </div>
                    </div>
                  </Fragment>
                )
            }
          </div>
        </div>
      </header>
    </div>
  );
};

export default GenericHome;
