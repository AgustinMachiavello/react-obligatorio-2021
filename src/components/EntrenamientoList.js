import React, { Component } from "react";

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

class EntrenamientoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      entrenamientos: [],
    };
  }


  handleEntrenamientoDelete = (e) => {
    //# TODO
    // Fetch para eliminar
    this.setState({ messages: `Eliminado ${e}` })
  }

  render() {
    return (
      <div className="py-5 col col-md-6">
        <h2>Listado de entrenamientos</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo</th>
              <th scope="col">Duración</th>
              <th scope="col">Peso</th> {/* TODO cambiar por variacion */}
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="">
            {this.props.entrenamientosList.map((entrenamiento, entrenamientoIndex) => {
              return (
                <tr key={entrenamientoIndex}>
                  <th scope="row">{entrenamiento.nombre}</th>
                  <td>{entrenamiento.tipo}</td>
                  <td>{entrenamiento.duracion}</td>
                  <td>{entrenamiento.peso}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={e => this.handleEntrenamientoDelete}>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EntrenamientoList;
