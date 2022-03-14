import styled from "styled-components";
import imageBanner from '../../assets/landing.jpg';
import imageBanner2 from '../../assets/landingBox.jpg';
import imageBanner3 from '../../assets/landing-img.jpg';


export const LandingImg = styled.div `
  background-image: url(${imageBanner});
  background-size:cover;
  background-position: center center;
  border-radius: 20px;
  width: 60%;
  height: 600px;
  
  @media screen and (max-width: 700px){
    width: 100%;
  }
 `

export const LandingImgBox = styled.div`
  background-image: url(${imageBanner2});
  background-size:cover;
  background-position: center center;
  border-radius: 20px;
  width: 50%;
  height: 600px;
  
  @media screen and (max-width: 700px){
    width: 100%;
  }
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
  width: 45%;

  @media screen and (max-width: 700px){
    width: 100%;
    margin: 0 auto;
  }
  `

export const Wrapper = styled.section `
  display: flex;
  flex-direction: row;
  margin: 30px;
  align-items: center;
  padding:0;
  @media screen and (max-width: 700px){
    flex-direction: column;
    margin: 20px;
    text-align: center;
    flex-direction: column-reverse;
  }

  h2 {
    /* font-family: 'Sansita', sans-serif; */
    font-size: 40px;
    font-weight: light;
    margin: 10px;
    line-height: 1.5em;
    @media screen and (max-width: 700px){
      font-size: 2em;
  }
  
  p {
    width: 70%;
  }
`

export const TitleLanding = styled.h1 `
  font-size: 8em;
  width: 80%;
  margin: 10px 0;
  color: #000;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1.4px;
    -webkit-text-stroke-color: black;
    letter-spacing: .2rem;

    @media screen and (max-width: 1420px){
      font-size: 7em;
    }
    @media screen and (max-width: 700px){
      -webkit-text-fill-color: #F9C04C;
      -webkit-text-stroke-width: 1px;
      width: 100%;
      font-size: 6em;
      margin: 2rem auto;
    }
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