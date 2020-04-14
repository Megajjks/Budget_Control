import React, { Fragment, useState, useEffect } from "react";

import Pregunta from "./Pregunta";
import Form from "./Form";
import ListadoGastos from "./ListadoGastos";
import ControlPresupuesto from "./ControlPresupuesto";
import GraphicPie from "./graphs/GraphicPie";
import { gastoToGrapic } from "../helper";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Table from './Table'

import arrow from "../assets/svg/arrow_back.svg";

const GenericHome = (props) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [dataGrapihc, setDataGrapihc] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      // Agregar el nuevo presupuesto
      setGastos([...gastos, gasto]);
      // Agregamos el conjunto de datos para el grafico
      setDataGrapihc([...dataGrapihc, gastoToGrapic(gasto)]);
      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
    }
    // resetear al false
    setCrearGasto(false);
  }, [gasto, crearGasto, gastos, restante]);

  //Eliminar un gasto
  const eliminarGasto = (id) => {
    const getGasto = gastos.filter((gasto) => gasto.id === id);
    const agregarMonto = restante + getGasto[0].cantidad;
    const newGastos = gastos.filter((gasto) => gasto.id !== id);
    const newDataGraphics = dataGrapihc.filter(
      (g) => g.id !== getGasto[0].nombre
    );
    guardarRestante(agregarMonto);
    setGastos(newGastos);
    setDataGrapihc(newDataGraphics);
  };

  // regresar a la pregunta
  const goBack = () => {
    // reinicio valores a default
    actualizarPregunta(true);
    guardarCantidad(0);
    guardarRestante(0);
    setGastos([]);
    return;
  };

  // Función para imprimir el pdf
  const printPdf = () =>{
    const input = document.querySelector("#capturePdf")
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF()
        pdf.addImage(imgData, 'PNG', 0, 0)
        pdf.save("download.pdf")
        
      })
  }

  return (
    <div className="container">
      <header>
        <div>
          <h1 style={{ fontWeight: "700" }}>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {mostrarPregunta ? (
              <Pregunta
                guardarCantidad={guardarCantidad}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) : (
              <Fragment>
                <img
                  onClick={goBack}
                  src={arrow}
                  style={{ width: "1.5em", cursor: "pointer" }}
                />
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
                      eliminarGasto={eliminarGasto}
                    />
                    <ControlPresupuesto
                      cantidad={cantidad}
                      restante={restante}
                    />
                    <button
                      className="button-primary u-full-width"
                      onClick={printPdf}
                    >Imprimir reporte de gastos</button>
                  </div>
                  <div id="capturePdf" className="column" style={{display:"flex",flexDirection:"column", margin:"0"}}>
                    <h2 style={{ fontWeight: "400", textAlign: "center" }}>
                      Representación de tus gastos
                    </h2>
                    <GraphicPie data={dataGrapihc} />
                    <Table gastos={gastos} style={{padding:"2em"}}/>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default GenericHome;
