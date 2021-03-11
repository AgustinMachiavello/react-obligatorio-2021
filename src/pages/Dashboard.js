import React, { Component } from "react";

// Components
import EntrenamientoForm from "../components/EntrenamientoForm";
import EntrenamientoList from "../components/EntrenamientoList";
import LogoutForm from "../components/LogoutForm";
import EntrenamientoCount from "../components/EntrenamientoCount";
import EntrenamientoMinutos from "../components/EntrenamientoMinutos";

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      messages: [],
      entrenamientosList: [],
      optionsList: [],
    };
  }

  setErrors = (errorList) => {
    console.log('errors', errorList)
    this.setState({ errors: errorList });
  };

  getEntrenamientoTipos = () => {
    const data = {
      token: getToken(),
    };
    fetchAPI('listado-entrenamiento-tipo', data, 'GET').then(
      response => {
        console.log('listado-entrenamiento-tipo', response)
        const errors = getError(response);
        this.setErrors(errors);
        if (!errors) {
          this.setState({optionsList: response.tipos })
        }
      }
    )
  }

  getEntrenamientos = () => {
    const data = {
      token: getToken(),
    };
    fetchAPI("listado-entrenamiento", data, "GET").then((response) => {
      console.log('listado-entrenamiento', response);
        const errors = getError(response);
        this.setErrors(errors);
        if (!errors) {
          this.setState({ entrenamientosList: response.entrenamiento });
        }

        //# TODO simulacrosi la API devuelve algo
        this.setState({ entrenamientosList: [
          {'id': 1, 'nombre': 'pedaleada', 'tipo': 'patas', 'duracion': 420, 'peso': 50},
          {'id': 2, 'nombre': 'trote', 'tipo': 'correr', 'duracion': 1, 'peso': 99},
          {'id': 3, 'nombre': 'saltos', 'tipo': 'patas', 'duracion': 22, 'peso': 44},
        ] })
      }
    );
  };


  componentDidMount() {
    this.getEntrenamientoTipos();
    this.getEntrenamientos();
  }

  render() {
    const user = this.props.location.state ? this.props.location.state.user : null;

    return (
      <div>
        <h1>Dashboard</h1>
        <p>Token (#TODO eliminar esto): {getToken()}</p>
        <div className="">
          <LogoutForm onError={this.setErrors} />
        </div>
        <div className={user && 'pt-3'}>
          {user && <h4>Usuario</h4>}
          {user && <h6>Nombre: {user.nombre}</h6>}
          {user && <h6>Altura: {user.altura}</h6>}
        </div>
        <div>
          {this.state.errors &&
            this.state.errors.map((error, errorIndex) => {
              return (
                <div
                  className="alert alert-danger d-inline-block my-2"
                  role="alert"
                  key={errorIndex}
                >
                  {error}
                </div>
              );
            })}
        </div>
        <div className="row">
          <div className="col col-12">
            <EntrenamientoForm onError={this.setErrors} optionsList={this.state.optionsList}/>
            <EntrenamientoList onError={this.setErrors} entrenamientosList={this.state.entrenamientosList}/>
            <EntrenamientoCount onError={this.setErrors} />
            <EntrenamientoMinutos onError={this.setErrors} entrenamientosList={this.state.entrenamientosList} optionsList={this.state.optionsList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
