import React, {Component} from 'react';


class Field extends Component {
    render() {
        return(
            <div className={"form-group"}>
                <label htmlFor={"Input"+this.props.name}>{this.props.name}</label>
                {this.props.elementName !== 'select' ? 
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
                        step={this.props.float && 0.01}
                    />
                    : 
                    <select className="form-control" id={this.props.name} >
                        {this.props.optionsList && this.props.optionsList.map((selectItem, selectItemIndex) => {
                            return (
                                <option key={selectItemIndex} value={selectItem.id}>{selectItem.nombre}</option>
                            )
                        })}
                    </select>
                }
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