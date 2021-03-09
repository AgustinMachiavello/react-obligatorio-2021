import React, {Component} from 'react';
import {withFormik} from 'formik';
import *  as Yup from 'yup'
import  { Redirect } from 'react-router-dom'

// Components
import RegisterForm from '../components/RegisterForm';
import Field from '../components/Field';

// API
import {setToken, getToken, fetchAPI, getError} from '../api/api';



const fields = {
    sections: [
        [
            {
                name: 'nombre',
                elementName: 'input',
                type: 'text',
                placeholder: 'Tu nombre',
            },
            {
                name: 'password',
                elementName: 'input',
                type: 'password',
                placeholder: 'Contraseña',
            },
            {
                name: 'altura',
                elementName: 'input',
                type: 'number',
                placeholder: 'Tu altura',
            },
        ],
    ]
}


class Register extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const {nombre, password, altura} = e.target.elements
        const data = {
            nombre: nombre.value,
            password: password.value,
            altura: altura.value,
        }
        fetchAPI('registro', data, 'POST').then(response => console.log(response)) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {fields.sections.map((section, sectionIndex) => {
                        return (
                            <div className="col-md-6" key={sectionIndex}>
                                {section.map((field, fieldIndex) => {
                                    return (
                                        <Field 
                                            {...field}
                                            key={fieldIndex} 
                                            value={this.props.values[field.name]}
                                            name={field.name}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                        />
                                    )
                                })}
                            </div>
                        )
                        })}
                    <button type="submit" className="btn btn-primary">Registrarme</button>
                </form>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        nombre: '',
        password: '',
        altura: '',
    }),
    validationSchema: Yup.object().shape({
        // TODO atulizar limitaciones
        nombre: Yup.string().min(1, 'Demasiado corto').max(16).required('El nombre es obligatorio :('),
        password: Yup.string().min(1).max(12).required(),
        altura: Yup.number().min(1).max(3).required(),
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log('formik');
    }
})(Register);