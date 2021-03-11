import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class EntrenamientoCount extends Component {

    // NOTA: Esto perfectamente podría ser un simple Count de la lista de entrenameintos, 
    // no hace falta preguntar a la API, pero ta...
    constructor(props) {
        super(props);
        this.state = {
            entrenamientoCount: 0,
        }
    }

    getEntrenamientosCount = () => {
        const data = {
          token: getToken(),
        };
        fetchAPI("cantidad-entrenamiento", data, "GET").then((response) => {
            console.log('cantidad-entrenamiento', response);
            const errors = getError(response);
            this.props.onError(errors);
            if (!errors) {
              this.setState({ entrenamientoCount: response.cantidad });
            }
    
            //# TODO simulacrosi la API devuelve algo
            this.setState({ entrenamientoCount: 54 })
          }
        );
      };

    componentDidMount() {
        this.getEntrenamientosCount();
    }

    render () {
        return (
            <div className="py-5 col col-md-6">
                <h2>Cantidad de entrenameintos: <span>{this.state.entrenamientoCount}</span></h2>
            </div>
        )
    }
}

export default EntrenamientoCount;