import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import { Input, Label, Error, Submit } from "../components/Form/FormStyles"
import { ButtonOrange, H1 } from '../globalStyles';
import { Wrapper, SectionForm, SectionImg } from "./LoginStyles"
import Img from '../assets/signup.jpg'
import { Link } from 'react-router-dom'

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {label}  {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  );
};

export default function Signup({ authenticate, handleSuccess }) {

  const schema = Yup.object().shape({
    name: Yup.string().required("Required fiels"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Required fiels")
  });





  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { firstname, lastname, email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      firstname,
      lastname,
      email,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "This email is already taken.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <Wrapper>
      <SectionImg>
      </SectionImg>
      <SectionForm>
        <H1>Sign up</H1>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: ""
          }}
          onSubmit={handleSuccess}
          validationSchema={schema}
        >
          {() => (
            <Form onSubmit={handleFormSubmission} className="signup__form">
              <InputComponent
                id="input-name"
                type="text"
                name="name"
                placeholder="First name"
                value={firstname}
                onChange={handleInputChange}
                autoComplete="off"
                // label="First name"
                required
              />
              <InputComponent
                id="input-name"
                type="text"
                name="name"
                placeholder="Last name"
                value={lastname}
                onChange={handleInputChange}
                autoComplete="off"
                // label="Last name"
                required
              />
              <InputComponent
                id="input-email"
                type="text"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
                autoComplete="off"
                // label="Email"
                required
              />


              <InputComponent
                id="input-password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                // label="Password"
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

              <ButtonOrange type="submit"> Submit </ButtonOrange>

            </Form>
          )}
        </Formik>
        <p> Forgot password?</p>

        <Link to={PATHS.AUTH}><p> Already have an account? Login</p></Link>
      </SectionForm>
    </Wrapper>
  );
}
