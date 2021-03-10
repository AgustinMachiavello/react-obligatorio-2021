import React, { Component } from "react";

// Components
import EntrenamientoForm from "../components/EntrenamientoForm";
import EntrenamientoList from "../components/EntrenamientoList";
import LogoutForm from "../components/LogoutForm";

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      messages: [],
    };
  }

  setErrors = (errorList) => {
    console.log(errorList)
    this.setState({ errors: errorList });
  };

  getUser = () => {
    const tempUser = 'a';
  }

  render() {
    const user = this.props.location.state ? this.props.location.state.user: null;

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
            <EntrenamientoForm onError={this.setErrors} />
            <EntrenamientoList onError={this.setErrors} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
