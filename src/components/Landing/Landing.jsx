import React from "react";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { ButtonOrange } from '../../globalStyles';
import { LandingImg, LandingImgBox, FooterImg, FirstSection, Wrapper, TitleLanding, H2 } from './LandingStyles';
import Marquee from "../Marquee/Marquee";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Wrapper>
        <FirstSection>
          <TitleLanding >Crisp yet soft</TitleLanding>
          <p>on the inside, our combination of Japanese, seasonal ingredients results in an assortment of original flavours.
            <Link to={PATHS.SHOP}><ButtonOrange >Shop Canelés</ButtonOrange></Link>
          </p>
        </FirstSection>
        <LandingImg />
      </Wrapper>
      <Marquee />

      <Wrapper>
        <LandingImgBox />
        <FirstSection>
          <H2>While keeping true to the traditional french pastry "canelé de Bordeaux", we blend different flavours of Japan, to create a truly unique pastry.</H2>
          <Link to={PATHS.SHOP}> <ButtonOrange> Shop </ButtonOrange></Link>
        </FirstSection>
      </Wrapper>
      <FooterImg />
    </>
  );
};

export default Landing;