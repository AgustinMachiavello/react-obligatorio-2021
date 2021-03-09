import React, {Component} from 'react';


class Field extends Component {
    render() {
        return(
            <div className={"form-group"}>
                <label htmlFor={"Input"+this.props.name}>{this.props.name}</label>
                <input 
                    className="form-control" 
                    id={this.props.name} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required="required" 
                    data-validation-required-message={`Por favor, ingresa ${this.props.name}`}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        )
    }
}

export default Field;