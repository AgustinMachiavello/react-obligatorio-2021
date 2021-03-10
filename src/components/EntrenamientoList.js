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

  componentDidMount() {
    this.setState({entrenamientos: [{'id': '1'}]})
  }

  getEntrenamientos = () => {
    const data = {
      token: getToken(),
    };
    fetchAPI("listado-entrenamiento", data, "GET").then((response) => {
        const errors = getError(response);
        this.props.onError(errors);
        // # TODO error sesión
        if (!errors) {
          this.setState({ entrenamientos: [response.msg.entrenamiento] });
        }
        return [{'id': '2'}]
      }
    );
  };

  render() {
    return (
      <div className="py-5">
        <h2>Listado de entrenamientos</h2>
        {this.state.entrenamientos.map((entrenamiento, entrenamientoIndex) => {
          return (
            <div key={entrenamientoIndex}>{entrenamiento.id}</div>
          )
        })}
      </div>
    );
  }
}

export default EntrenamientoList;
