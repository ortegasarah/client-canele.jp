import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 20px;
  width: 50%;
  background-color: transparent;
  border: 1px solid rgba(49,49,49,.2);
  color: #313131;
  font-size: 1em;
  font-weight: 500;
  

  &:focus {
    border-color: var(--yellow);
  }

  @media (max-width: 700px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Error = styled.span`
  color: #e26e2d;
`;

export const Submit = styled.button`
  background: none;
  border: 2px solid var(--orange);
  color: black;
  cursor: pointer;
  float: right;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
