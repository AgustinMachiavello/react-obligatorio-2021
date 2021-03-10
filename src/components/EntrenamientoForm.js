import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

// Components
import Field from "../components/Field";

// API
import { setToken, getToken, fetchAPI, getError } from "../api/api";

const fields = {
  sections: [
    [
      {
        name: "id_tipo",
        elementName: "select",
      },
      {
        name: "peso",
        elementName: "input",
        type: "number",
        placeholder: "Peso en Kg",
      },
      {
        name: "duracion",
        elementName: "input",
        type: "number",
        placeholder: "Mintuos invertidos",
      },
    ],
  ],
};

class EntrenamientoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      optionsList: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id_tipo, peso, duracion } = e.target.elements;
    const data = {
      id_tipo: id_tipo.value,
      token: getToken(),
      peso: peso.value,
      duracion: duracion.value,
    };
    fetchAPI("agregar-entrenamiento", data, "POST").then((response) => {
      console.log(response)
      const errors = getError(response);
      this.props.onError(errors);
      if (!errors) {
        this.setState({ messages: [response.msg] });
      }
    });
  };

  getEntrenamientoTipos = () => {
    const data = {
      token: getToken(),
    };
    fetchAPI('listado-entrenamiento-tipo', data, 'GET').then(
      response => {
        console.log(response)
        const errors = getError(response);
        this.props.onError(errors);
        if (!errors) {
          this.setState({optionsList: response.tipos })
        }
      }
    )
  }

  componentDidMount = () => {
    this.getEntrenamientoTipos();
  }

  render() {
    return (
      <div className="py-5">
        <h2>Agregar entrenameinto</h2>
        <form onSubmit={this.handleSubmit}>
          {fields.sections.map((section, sectionIndex) => {
            return (
              <div className="col col-md-6" key={sectionIndex}>
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
                      optionsList={this.state.optionsList}/>
                  );
                })}
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
              Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    id_tipo: "",
    peso: "",
    duracion: "",
  }),
  validationSchema: Yup.object().shape({
    id_tipo: Yup.number().min(0).required('Qué tipo de entrenamiento fue?'),
    peso: Yup.number()
      .min(0, "Poné el peso, loco")
      .required("Te olvidas del peso"),
    duracion: Yup.number().min(0, 'Ni entrenaste...').required('Musculaste?'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("formik");
  },
})(EntrenamientoForm);

