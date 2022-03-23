import React, { useState } from "react";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom'
import { login } from "../services/auth";
import "./Signup";
import { Formik, Form, useField } from "formik";

/* STYLES */
import { Input, Label, Error, Submit } from "../components/Form/FormStyles"
import { ButtonOrange, H1 } from '../globalStyles';
import { Wrapper, SectionForm, SectionImg } from "./LoginStyles"

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
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



  const schema = Yup.object().shape({
    name: Yup.string().required("Required fiels"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Required fiels")
  });


  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
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
      <SectionImg>
      </SectionImg>
      <SectionForm>
        <H1>Log In Hi</H1>
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
                id="input-email"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />


              <InputComponent
                id="input-password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
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

        <Link to={PATHS.SIGNUPPAGE}><p> Don't have an account? Sign up</p></Link>
      </SectionForm>
    </Wrapper>
  );
}

export default LogIn;
