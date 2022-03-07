import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { GlobalStyle, ButtonBlack, ButtonGreen } from '../../globalStyles';
import { LandingImg, LandingImgBox, FirstSection, Wrapper, Landinggg } from './styles';
import RotateImage from "../../assets/landingBox.jpg"
const Landing = () => {
  return (
    <>
      <Wrapper>
        <FirstSection>
          <h1>Crisp yet soft</h1>
          <p>on the inside, our combination of Japanese, seasonal ingredients results in an assortment of original flavours. </p>
          <ButtonBlack>Shop Canelés</ButtonBlack>
        </FirstSection>
        <LandingImg />
        <Landinggg />
      </Wrapper>
      <Wrapper>

        <LandingImgBox />
        <FirstSection>
          <h1>While keeping true to the traditional french pastry"canelé de Bordeaux", we blend different flavours of Japan, to create a truly unique pastry.</h1>
          <ButtonGreen>Shop </ButtonGreen>
        </FirstSection>
      </Wrapper>
    </>
  );
};

export default Landing;