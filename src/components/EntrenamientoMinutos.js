import React, { Component } from "react";

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

const entrenamientosTiposChecked = []

class EntrenamientoMinutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  getMinutosEntrenamiento = (tipo) => {
    let tiempo = 0;
    const entrenamientosTipo = this.props.entrenamientosList.filter(ent => ent.tipo === tipo)
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
            {this.props.entrenamientosList.map((entrenamiento, entrenamientoIndex) => {
              if (entrenamientosTiposChecked.indexOf(entrenamiento.tipo) >= 0) {
                return;
              }
              return (
                entrenamientosTiposChecked.push(entrenamiento.tipo),
                <tr key={entrenamientoIndex}>
                  <th scope="row">{entrenamiento.tipo}</th>
                  <td>{this.getMinutosEntrenamiento(entrenamiento.tipo)} min</td>
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
