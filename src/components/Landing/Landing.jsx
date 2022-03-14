import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { ButtonBlack, ButtonGreen } from '../../globalStyles';
import { LandingImg, LandingImgBox,FooterImg, FirstSection, Wrapper, TitleLanding } from './LandingStyles';
import RotateImage from "../../assets/landingBox.jpg"
const Landing = () => {
  return (
    <>
      <Wrapper>
        <FirstSection>
          <TitleLanding >Crisp yet soft</TitleLanding>
          <p>on the inside, our combination of Japanese, seasonal ingredients results in an assortment of original flavours. </p>
          <ButtonBlack to={PATHS.SIGNUPPAGE}>Shop Canelés</ButtonBlack>
        </FirstSection>
        <LandingImg />
        </Wrapper>

        <Wrapper>
        <LandingImgBox />
        <FirstSection>
          <h2>While keeping true to the traditional french pastry "canelé de Bordeaux", we blend different flavours of Japan, to create a truly unique pastry.</h2>
          <ButtonGreen to={PATHS.SIGNUPPAGE}>Shop </ButtonGreen>
        </FirstSection>
        </Wrapper>
        <FooterImg />

    </>
  );
};

export default Landing;