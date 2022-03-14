import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import { Input, Label, Error, Submit } from "../components/Form/FormStyles"
import { ButtonGreen } from '../globalStyles';
import { Wrapper } from "./LoginStyles"



const InputComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <Label>
        {label} : {meta.touched && meta.error && <Error>{meta.error}</Error>}
        <Input {...field} {...props} />
      </Label>
    );
  };

  


const LogIn = ({ handleSuccess, authenticate }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const InputComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <Label>
        {label} : {meta.touched && meta.error && <Error>{meta.error}</Error>}
        <Input {...field} {...props} />
      </Label>
    );
  };
  

    const schema = Yup.object().shape({
      name: Yup.string().required("Required fiels"),
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Required fiels")
    });








  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }


  return (
    <Wrapper>
       <h1>Log In</h1>
       <Formik
      initialValues={{
        name: "",
        email: ""
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form onSubmit={handleFormSubmission} className="signup__form">
        <InputComponent
          id="input-username"
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
          label="Email"
          required
          />
        

        <InputComponent
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          label="Password"
          autoComplete="off"
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

<ButtonGreen type="submit"> Submit </ButtonGreen>

      </Form>
      )}
    </Formik>
    </Wrapper>
  );
}

export default LogIn;
