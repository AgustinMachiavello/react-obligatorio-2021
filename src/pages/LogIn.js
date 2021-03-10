import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

// Router

// Components
import Field from "../components/Field";

// API
import { setToken, fetchAPI, getError } from "../api/api";

const fields = {
  sections: [
    [
      {
        name: "nombre",
        elementName: "input",
        type: "text",
        placeholder: "Tu nombre",
      },
      {
        name: "password",
        elementName: "input",
        type: "password",
        placeholder: "Contraseña",
      },
    ],
  ],
};

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      messages: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, password, altura } = e.target.elements;
    const data = {
      nombre: nombre.value,
      password: password.value,
    };
    fetchAPI("login", data, "POST").then((response) => {
      console.log(response)
      const errors = getError(response);
      this.setState({ errors: errors });
      if (!errors) {
        this.setState({ messages: ["Redirigiendo..."] });
        setToken(response.token);
        setTimeout(() => {
          this.props.history.push("/dashboard");
        }, 2000);
      }
    });
  };

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
                      touched={this.props.touched[field.name]}
                      errors={this.props.errors[field.name]}
                    />
                  );
                })}
              </div>
            );
          })}
          {this.state.errors &&
            this.state.errors.map((error, errorIndex) => {
              return (
                <div
                  className="alert alert-danger"
                  role="alert"
                  key={errorIndex}
                >
                  {error}
                </div>
              );
            })}
          {this.state.messages &&
            this.state.messages.map((message, messageIndex) => {
              return (
                <div
                  className="alert alert-success"
                  role="alert"
                  key={messageIndex}
                >
                  {message}
                </div>
              );
            })}
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    nombre: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    nombre: Yup.string()
      .min(5, "Demasiado corto")
      .max(16)
      .required("El nombre es obligatorio :("),
    password: Yup.string().min(6).max(12).required("Y la contraseña?"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("formik");
  },
})(LogIn);
