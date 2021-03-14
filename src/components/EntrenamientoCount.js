import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class EntrenamientoCount extends Component {

    // NOTA: Esto perfectamente podría ser un simple Count de la lista de entrenameintos, 
    // no hace falta preguntar a la API...
    constructor(props) {
        super(props);
        this.state = {
            entrenamientoCount: 0,
        }
    }

    render () {
        return (
            <div className="py-5 col col-md-6">
                <h2>Cantidad de entrenameintos: <span>{this.props.entrenamientosList && this.props.entrenamientosList.length}</span></h2>
            </div>
        )
    }
}

export default EntrenamientoCount;