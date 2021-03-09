import React, {Component} from 'react';

// Components


class LogInForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={e => this.props.onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="InputEmail" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            required={true}
                            >
                        </input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="InputPassword" 
                            placeholder="Password"
                            required={true}
                            >
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default LogInForm;