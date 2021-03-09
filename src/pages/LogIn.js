import React, {Component} from 'react';

// Router
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
import LogInForm from '../components/LogInForm';


class LogIn extends Component {

    render() {
        console.log()
        return (
            <div>
                <LogInForm onSubmit={e => this.props.onSubmit(e)}/>
                <Link to="/register">Regístrate</Link>
            </div>
        )
    }
}

export default LogIn;