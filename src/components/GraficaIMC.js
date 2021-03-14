import React, { Component } from "react";
import { Chart } from "react-charts";

const axes = [{ primary: true, type: "linear", position: "bottom" },{ type: "linear", position: "left" }]


class GraficaIMC extends  Component {
  // No puedo graficar el historial de IMC si por cada entrenameinto no se agrega la altura =?=?=?
  // Tampoco necesito hacer fetch si ya tengo el listado de entrenameintos del usuario y su peso...
  // No tiene sentido tener un endpoint solo para el

  constructor(props){
    super(props);
    this.state = {
      datos: [],
    }
  }

  calculateIMC = (peso, altura) => {
    return (peso/(altura*altura))
  }
  
  generateData = () => {
    const valores = []
    if (this.props.entrenamientosList) {
      this.props.entrenamientosList.map((ent, entIndex) => {
        valores.push([ent.id, this.calculateIMC(ent.peso, 1.5)])
      })
    }
    return valores
  }

  render(){
    const data = this.generateData();
    return (
      <div className="py-5 col col-md-6">
        <h2>IMC</h2>
        <h5>X: ID</h5>
        <h5>Y: IMC</h5>
        <div className="chart">
          <Chart data={[{ label: 'IMC', data: data }]} axes={axes} />
        </div>
      </div>
    );
  }

}

export default GraficaIMC;
