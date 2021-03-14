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
    // Fetch para eliminar ??? No hay ningun endpoint en la documentación
    this.setState({ messages: [`Eliminado ${e}`] })
  }

  render() {
    return (
      <div className="py-5 col col-md-6">
        <h2>Listado de entrenamientos</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tipo</th>
              <th scope="col">Duración</th>
              <th scope="col">Peso</th> {/* TODO cambiar por variacion */}
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="">
            {this.props.entrenamientosList && this.props.entrenamientosList.map((entrenamiento, entrenamientoIndex) => {
              return (
                <tr key={entrenamientoIndex}>
                  <th scope="row">{entrenamiento.id}</th>
                  <td>{entrenamiento.nombre}</td>
                  <td>{entrenamiento.duracion} min</td>
                  <td>{entrenamiento.peso}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={e => this.handleEntrenamientoDelete(entrenamiento.id)}>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              )
            })}
            <div className="p-2">
              {this.state.messages &&
                this.state.messages.map((message, messageIndex) => {
                  return (
                    <div
                      className="alert alert-success"
                      role="alert"
                      key={messageIndex}
                    >
                      {message}
                    </div>
                  );
              })}
            </div>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EntrenamientoList;
