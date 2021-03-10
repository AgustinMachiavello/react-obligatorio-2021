import React, {Component} from 'react';

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";


class LogoutForm extends Component {

    handleClick = () => {
        const data = {
            token: getToken(),
        };
        fetchAPI('logout', data, 'GET').then(
            response => {
                console.log(response)
                const errors = getError(response);
                this.props.onError(errors);
                if (!errors) {
                    this.props.history.push("/login");
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