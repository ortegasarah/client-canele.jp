import React, { useState } from "react";
import { Container, H3, P, H4, SuccessContainer } from "./ModalInnerStyles";
import Form from "../Form/Form"

const Input = ({ handleSuccess }) => (
  <Container>
    {" "}
    <H3> Join our Community</H3>
    <P>
      Sign up to our mailing list for first access to gear launches, camp
      cooking recipes, and outdoor tips!
    </P>
    <Form handleSuccess={handleSuccess} />
  </Container>
);

const Success = () => (
  <SuccessContainer>
    <H4>Yayyyyy!!</H4>
    <p>
      We hope you are excited too! In the meantime u can follow us on social
      media
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
