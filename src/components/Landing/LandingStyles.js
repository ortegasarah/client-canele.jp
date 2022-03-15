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
    @media screen and (max-width: 700px){
      height: 500px;
    }
  `

export const FirstSection = styled.div `
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;

  @media screen and (max-width: 700px){
    width: 100%;
    margin: 0 auto;
  }
  `

export const Wrapper = styled.section `
  display: flex;
  flex-direction: row;
  margin: 30px auto;
  align-items: center;
  padding:0;
  p{
    padding: 2rem 0;
    margin: 0 auto;
  }
  @media screen and (max-width: 700px){
    flex-direction: column;
    margin: 20px auto;
    text-align: center;
    flex-direction: column-reverse;
    
  }

  h2 {
    font-size: 40px;
    font-weight: light;
    margin: 10px auto;
    line-height: 1.5em;
    @media screen and (max-width: 700px){
      font-size: 2em;
  }}
  
  p {
    width: 70%;
    padding: 0;
  }

  @media screen and (max-width: 700px){
    p {
    width: 100%;
  }
    }
`

export const TitleLanding = styled.h1`
  font-size: 8em;
  width: 80%;
  margin: 10px 0;
  color: #000;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1.4px;
    -webkit-text-stroke-color: #F9C04C;
  letter-spacing: .2rem;
  line-height: 7rem;
  padding: 3rem 0;

    @media screen and (max-width: 1420px){
      font-size: 7em;
    }
    @media screen and (max-width: 700px){
      -webkit-text-fill-color: #F9C04C;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000;
      width: 100%;
      font-size: 5em;
      margin: 2rem auto;
      padding:  0;
      line-height: 6rem;
    }
`

export const H2 = styled.h2`
      margin: 0 auto;

   @media screen and (max-width: 700px){
      width: 100%;
      font-size: 4em;
      margin: 0 auto;
      padding: 0;
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