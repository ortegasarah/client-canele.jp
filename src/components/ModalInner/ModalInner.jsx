import React, { useState } from "react";
import { Container, H3, P, H4, SuccessContainer } from "./ModalInnerStyles";
import Form from "../Form/Form"

const Input = ({ handleSuccess }) => (
  <Container>
    {" "}
    <H3> Your Account</H3>
    <Form handleSuccess={handleSuccess} />
    <P>Forgot password?</P>
    <P>Don't have an account? Sign up</P>
  </Container>
);

const Success = () => (
  <SuccessContainer>
    <H4>Yayyyyy!!</H4>
    <p>
     
    </p>
  </SuccessContainer>
);

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSuccess = () => {
    setShowSuccess(true);
  };
  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

export default ModalInner;
