import React, {Component} from 'react';

// Components


// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>
                    Token (#TODO eliminar esto): {getToken()} 
                </p>
            </div>
        )
    }
}

export default Dashboard;