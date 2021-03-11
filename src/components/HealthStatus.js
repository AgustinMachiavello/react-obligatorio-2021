import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class HealthStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            salud: '',
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
            // # TODO si anduviera la API...
            this.setState({ salud: 'saludable' })
        })
    }
    
    componentDidMount() {
        this.getHealthStatus()
    }

    render () {
        return (
            <div className="py-5 col col-md-6">
                <h1>Estado de salud</h1>
                <h3>{this.state.salud}</h3>
            </div>
        )
    }
}

export default HealthStatus;