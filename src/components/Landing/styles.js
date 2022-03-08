import styled from "styled-components";
import imageBanner from '../../assets/landing.jpg';
import imageBanner2 from '../../assets/landingBox.jpg';
import imageBanner3 from '../../assets/landing-img.jpg';


export const LandingImg = styled.div `
  background-image: url(${imageBanner});
  background-size:cover;
  background-position: top center;
  border-radius: 20px;
  width: 60%;
  height: 600px;
 `

export const LandingImgBox = styled.div`
  background-image: url(${imageBanner2});
  background-size:cover;
  background-position: left center;
  border-radius: 20px;
  width: 50%;
  height: 600px;
  `;

  export const FooterImg = styled.div`
  background-image: url(${imageBanner3});
  background-size:cover;
  background-position: center center;
  width: 100%;
  height: 700px;
  `;

export const FirstSection = styled.div `
  display: flex;
  flex-direction: column;
  width: 40%;

}
  `

export const Wrapper = styled.section `
  display: flex;
  flex-direction: row;
  margin: 30px;
  align-items: center;

  h2 {
    font-family: 'Sansita', sans-serif;
    font-size: 40px;
    font-weight: light;
    margin: 10px;
    line-height: 1.5em;
  }
  
  p {
    width: 70%;
  }
  `

export const TitleLanding = styled.h1 `
  font-family: 'Sansita', sans-serif;
  font-size: 5em;
  width: 50%;
  margin: 10px 0;
`
// export const RotateImg = styled.img.attrs({

// })`
// .rotate {
//   display: inline-block;
//   -webkit-animation: rotate 4s linear infinite;
//   animation: rotate 4s linear infinite;
// }

// @keyframes rotate {
//   from {
//       transform: rotate(0deg);
//   }
//   to {
//       transform: rotate(360deg);
//   }
// }`