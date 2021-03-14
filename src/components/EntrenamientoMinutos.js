import React, { Component } from "react";

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";



class EntrenamientoMinutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  getMinutosEntrenamiento = (tipo) => {
    let tiempo = 0;
    const entrenamientosTipo = this.props.entrenamientosList.filter(ent => ent.nombre === tipo)
    entrenamientosTipo.map((ent, entIndex) => tiempo += ent.duracion);
    // entrenamientosTiposChecked.push(tipo);
    return tiempo;
  }

  handleEntrenamientoDelete = (e) => {
    //# TODO
    // Fetch para eliminar
    this.setState({ messages: `Eliminado ${e}` })
  }

  render() {
    const entrenamientosTiposChecked = []
    return (
      <div className="py-5 col col-md-6">
        <h2>Minutos por entrenameinto</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Tiempo</th>
            </tr>
          </thead>
          <tbody className="">
            {this.props.entrenamientosList && this.props.entrenamientosList.map((entrenamiento, entrenamientoIndex) => {
              if (entrenamientosTiposChecked.indexOf(entrenamiento.nombre) >= 0) {
                return;
              }
              entrenamientosTiposChecked.push(entrenamiento.nombre)
              return (
                <tr key={entrenamientoIndex}>
                  <th scope="row">{entrenamiento.nombre}</th>
                  <td>{this.getMinutosEntrenamiento(entrenamiento.nombre)} min</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EntrenamientoMinutos;
