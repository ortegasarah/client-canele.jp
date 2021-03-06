import styled from "styled-components";
import { AbsoluteCenter } from "../../globalStyles";

export const Modal = styled.div`
  animation: glow 1s forwards;
  background: #fbfbfb;
  background: var(--yellow);
  box-sizing: border-box;
  padding: 60px;
  height: 100vh;
  right: 0;
  top: 0;
  max-width: 800px;
  width: 30%;
  z-index: 3;
  position: fixed;

  @media (max-width: 700px) {
    padding: 30px;
    width: calcl(100px - 30px);
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100vh;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 60px;

  &::before,
  &::after {
    background: #6e6336;
    content: "";
    position: absolute;
    height: 33px;
    width: 2px;
    left: 15px;
    top: 0;
  }
  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 30px;
    top: 30px;
  }
`;
