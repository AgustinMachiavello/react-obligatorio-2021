import React, {Component} from "react";

class Registro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            password: "",
            altura: "",
            usuario: null,
            url: "https://plan-nature.000webhostapp.com/api/obligatorio"
        };

        this.e_registrarse = this.e_registrarse.bind(this);
        this.e_nombre = this.e_nombre.bind(this);
        this.e_password = this.e_password.bind(this);
        this.e_altura = this.e_altura.bind(this);
    }

    render() {
        if(this.state.usuario !== null) {
            console.log("render", this.state.usuario);
        }

        return <form onSubmit={ this.e_registrarse }>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="nombre">Nombre</label><br/>
                    <input type="text" id="nombre" className="form-control" value={ this.state.nombre } onChange={ this.e_nombre } />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id="password" className="form-control" value={ this.state.password } onChange={ this.e_password } />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label htmlFor="altura">Altura (mtr)</label><br/>
                    <input type="number" id="altura" className="form-control" value={ this.state.altura } onChange={ this.e_altura } />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <input type="submit" className="btn btn-success" value="Registrarse" />
                </div>
            </div>
        </form>;
    }

    e_registrarse(e) {
        e.preventDefault();

        let self = this;
        let uri = this.state.url + "/registro";
        uri += "?nombre=" + this.state.nombre;
        uri += "&password=" + this.state.password;
        uri += "&altura=" + this.state.altura; // ALTURA EN METROS, ej: 1.73

        fetch(uri, { method: "POST" })
            .then(response => response.json())
            .then(data => self.setState({ usuario: data }));

    }

    e_nombre(e) {
        this.setState({ nombre: e.target.value });
    }

    e_password(e) {
        this.setState({ password: e.target.value });
    }

    e_altura(e) {
        this.setState({ altura: e.target.value });
    }
}
export default Registro;