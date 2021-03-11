import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class VariacionPeso extends Component {
    constructor(props){
        super(props)
        this.state = {
            variacion: 0,
        }
    }

    getHealthStatus = () => {
        const data = {
            token: getToken(),
        }
        fetchAPI('variacion-peso', data, 'GET').then(response => {
            console.log('variacion-peso', response)
            const errors = getError(response);
            this.props.onError(errors);
            if (!errors) {
                this.setState({ variacion: response.variacion })
            }
            // # TODO si anduviera la API...
            this.setState({ variacion: 25 })
        })
    }
    
    componentDidMount() {
        this.getHealthStatus()
    }

    render () {
        return (
            <div className="py-5 col col-md-6">
                <h1>Variación de peso</h1>
                <h3>{this.state.variacion}</h3>
            </div>
        )
    }
}

export default VariacionPeso;