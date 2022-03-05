import styled from "styled-components";
import imageBanner from '../../assets/landing.jpg';
import imageBanner2 from '../../assets/landingBox.jpg';

export const LandingImg = styled.img.attrs({
  src: `${imageBanner}`
})`
    // height: 563px;
    width: 65%;
    border-radius: 20px;
    position: relative;
`;

export const LandingImgBox = styled.img.attrs({
    src: `${imageBanner2}`
  })`
      // height: 563px;
      width: 65%;
      border-radius: 20px;
      position: relative;
  `;