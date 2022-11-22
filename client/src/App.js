import React, { useState } from 'react';
import './App.css';
import { Axios } from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = value => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (values) => {
    console.log(values);
  }

  const logInProtocols = yup.object().shape({
    user: yup.string().required("Este campo é obrigatório"),
    password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres.").required("Este campo é obrigatório")
  })

  const signUpProtocols = yup.object().shape({
    user: yup.string().required("Este campo é obrigatório"),
    password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres.").required("Este campo é obrigatório")
  })

  return (
    <div className='container'>
      <h1 className='title'>NG-CASH</h1>

      <div class="inner">

      <Formik
        initialValues={{}}
        onSubmit={handleClickButton}
        validationSchema={logInProtocols}
      >
        <Form>
          <div className='login'>
            <h1>Entrar</h1>
            <div className='login-form-group'>
              <Field
                name="user"
                className="log-field"
                placeholder="Nome de usuário"
              />

              <ErrorMessage component="span" name="user" className='form-error' />
            </div>
            <div className='login-form-group'>
              <Field
                name="password"
                type="password"
                className="log-field"
                placeholder="Senha" />

              <ErrorMessage component="span" name="user" className='form-error' />
            <button
              className='btn'
              onClick={handleClickButton}
              type="submit"
            >
              Login
            </button>
            </div>
          </div>

          <div className='signup'>
            <h1>Registre-se</h1>
            <div className='login-form-group'>
              <Field
                name="user"
                className="log-field"
                placeholder="Nome de usuário"
              />

              <ErrorMessage component="span" name="user" className='form-error' />
            </div>
            <div className='login-form-group'>
              <Field
                name="password"
                type="password"
                className="log-field"
                placeholder="Senha" />

              <ErrorMessage component="span" name="user" className='form-error' />
            </div>
            <button
              className='btn'
              onClick={handleClickButton}
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
      </div>




      {/* <input
        type="text"
        name="user"
        placeholder="Nome de usuário"
        className="login--input"
        onChange={handleChangeValues}
      />

      <input
        type="password"
        name="password"
        placeholder="Senha"
        className="login--input"
        onChange={handleChangeValues}
      /> */}
    </div>
  );
}

export default App;
