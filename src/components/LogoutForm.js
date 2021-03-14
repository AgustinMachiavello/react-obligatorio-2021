import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class LogoutForm extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const data = {
            token: getToken(),
        };
        fetchAPI('logout', data, 'GET').then(
            response => {
                console.log('logout', response)
                const errors = getError(response);
                this.props.onError(errors);
                if (!errors) {
                    window.location.href = "/login";
                }
            }
        )
    }

    render () {
        return (
            <div>
                <button type="submit" className="btn btn-danger" onClick={this.handleClick}>Cerrar sesión</button>
                {this.props.children}
            </div>
        )
    }
}

export default LogoutForm;