import React, {Component} from 'react';

// Components


class RegisterForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="InputName">Name</label>
                        <input 
                            name="nombre"
                            type="text" 
                            className="form-control" 
                            id="InputName" 
                            aria-describedby="nameHelp" 
                            placeholder="Enter name"
                            required={true}
                            max="16"
                            onChange={this.props.handleChange}
                            >
                        </input>
                        <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input
                            name="password"
                            type="password" 
                            className="form-control" 
                            id="InputPassword" 
                            placeholder="Password"
                            required={true}
                            min="6"
                            max="22"
                            onChange={this.props.handleChange}
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputHeight">Height</label>
                        <input
                            name="altura"
                            type="number" 
                            className="form-control" 
                            id="InputHeight" 
                            placeholder="Height"
                            required={true}
                            min="1"
                            max="3"
                            onChange={this.props.handleChange}
                            >
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarme</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;