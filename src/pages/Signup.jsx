import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
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
    firstName: Yup.string().required,
    lastName: Yup.string().required,
    email: Yup.string()
      .email("Must be a valid email address")
      .required,

    password: Yup.string()
      .required
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .min(8),
    confirmPassword: Yup.string()
      .required
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .min(8),
  });

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { firstName, lastName, email, password, confirmPassword } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      lastName,
      email,
      firstName,
      password,
      confirmPassword
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
        <H1>Create account</H1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          onSubmit={handleSuccess}
          validationSchema={schema}
        >
          {() => (
            <Form onSubmit={handleFormSubmission} className="signup__form">

              <InputComponent
                id="input-firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange}
                autoComplete="off"
                // label="Email"
                required
              />
              <InputComponent
                id="input-lastname"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
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
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                // label="Password"
                autoComplete="off"
                required
                minLength="8"

              />

              <InputComponent
                id="input-confirmPassword"
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
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

              <ButtonOrange type="submit"> Create </ButtonOrange>

            </Form>
          )}
        </Formik>
        <p> Forgot password?</p>

        <Link to={PATHS.LOGINPAGE}><p> Already have an account? Login</p></Link>
      </SectionForm>
    </Wrapper>
  );
}
