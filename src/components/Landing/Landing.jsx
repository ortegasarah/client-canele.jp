import React from "react";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { ButtonBlack, ButtonGreen } from '../../globalStyles';
import { LandingImg, LandingImgBox,FooterImg, FirstSection, Wrapper, TitleLanding } from './LandingStyles';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Wrapper>
        <FirstSection>
          <TitleLanding >Crisp yet soft</TitleLanding>
          <p>on the inside, our combination of Japanese, seasonal ingredients results in an assortment of original flavours. </p>
          <Link to={PATHS.SHOP}><ButtonBlack >Shop Canelés</ButtonBlack></Link>
        </FirstSection>
        <LandingImg />
        </Wrapper>

        <Wrapper>
        <LandingImgBox />
        <FirstSection>
          <h2>While keeping true to the traditional french pastry "canelé de Bordeaux", we blend different flavours of Japan, to create a truly unique pastry.</h2>
          <Link to={PATHS.SHOP}> <ButtonGreen> Shop </ButtonGreen></Link>
        </FirstSection>
        </Wrapper>
        <FooterImg />

    </>
  );
};

export default Landing;