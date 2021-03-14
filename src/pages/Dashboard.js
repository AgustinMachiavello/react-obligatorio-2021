import React, { Component } from "react";
import { Link } from 'react-router-dom';

// Components
import EntrenamientoForm from "../components/EntrenamientoForm";
import EntrenamientoList from "../components/EntrenamientoList";
import LogoutForm from "../components/LogoutForm";
import EntrenamientoCount from "../components/EntrenamientoCount";
import EntrenamientoMinutos from "../components/EntrenamientoMinutos";
import GraficaIMC from "../components/GraficaIMC";
import HealthStatus from "../components/HealthStatus";
import VariacionPeso from "../components/VariacionPeso";


// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      errors: [],
      messages: [],
      entrenamientosList: [],
      optionsList: [],
      imc: [],
    };
  }

  setErrors = (errorList) => {
    console.log('errors', errorList)
    this.setState({ errors: errorList });
    if (errorList && errorList.length > 0 && errorList[0] === 'Token no válido.') {
      this.setState({ login: false })
      console.log('logged out')
    }
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
          this.setState({ entrenamientosList: response.entrenamientos });
        }
      }
    );
  };

  setEntrenamientos = (newEntrenamientosList) => {
    this.setState({ entrenamientosList : newEntrenamientosList });
  } 

  componentDidMount() {
    this.getEntrenamientoTipos();
    this.getEntrenamientos();
  }

  render() {
    const user = this.props.location.state ? this.props.location.state.user : null;

    return (
      <div>
        <h1>Dashboard</h1>
        {this.state.login ? 
          <div>
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
                  <EntrenamientoForm onError={this.setErrors} optionsList={this.state.optionsList} setEntrenamientos={this.setEntrenamientos} entrenamientosList={this.state.entrenamientosList} resfreshList={this.getEntrenamientos}/>
                  <EntrenamientoList onError={this.setErrors} entrenamientosList={this.state.entrenamientosList} optionsList={this.state.optionsList}/>
                  <EntrenamientoCount onError={this.setErrors} entrenamientosList={this.state.entrenamientosList}/>
                  <EntrenamientoMinutos onError={this.setErrors} entrenamientosList={this.state.entrenamientosList} optionsList={this.state.optionsList}/>
                  <GraficaIMC entrenamientosList={this.state.entrenamientosList}/>
                  <HealthStatus onError={this.setErrors}/>
                  <VariacionPeso onError={this.setErrors}/>
                </div>
              </div>
          </div>
          : 
          <div>
            <h2>No has iniciado sesión :(</h2>  
            <Link className="" to="/login">Iniciar sesión</Link>
          </div>
        }
      </div>
    );
  }
}

export default Dashboard;
