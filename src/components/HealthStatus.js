import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class HealthStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            salud: '',
            imc: '',
        }
    }

    getHealthStatus = () => {
        const data = {
            token: getToken(),
        }
        fetchAPI('estado-salud', data, 'GET').then(response => {
            console.log('estado-salud', response)
            const errors = getError(response);
            this.props.onError(errors);
            if (!errors) {
                this.setState({ salud: response.salud })
            }
        })
    }

    getIMC = () => {
        const data = {
            token: getToken(),
        }
        fetchAPI('indice-de-masa-corporal', data, 'GET').then(response => {
            console.log('indice-de-masa-corporal', response)
            const errors = getError(response);
            this.props.onError(errors);
            if (!errors) {
                this.setState({ imc: response.imc })
            }
        })
    }
    
    componentDidMount() {
        this.getHealthStatus()
        this.getIMC();
    }

    render () {
        return (
            <div className="py-5 col col-md-6">
                <h1>Salud</h1>
                <h5>Estado: {this.state.salud}</h5>
                <h5>IMC: {this.state.imc}</h5>
            </div>
        )
    }
}

export default HealthStatus;