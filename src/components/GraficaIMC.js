import React, { Component, useEffect} from "react";
import { Chart } from "react-charts";

function GraficaIMC(props) {
  // No puedo graficar el historial de IMC si por cada entrenameinto no se agrega la altura =?=?=?
  // Tampoco necesito hacer fetch si ya tengo el listado de entrenameintos del usuario y su peso...
  // No tiene sentido tener un endpoint solo para el


  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: props.data,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  
  return (
    <div className="py-5 col col-md-6">
      <h2>IMC</h2>
      <div className="chart">
        <Chart data={data} axes={axes} />
      </div>
    </div>
  );
}

export default GraficaIMC;
