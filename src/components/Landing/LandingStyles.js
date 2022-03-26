import styled from "styled-components";
import imageBanner from '../../assets/24boxes.png';
import imageBanner2 from '../../assets/landing-packaging.jpg';
import imageBanner3 from '../../assets/landing-img.jpg';


export const LandingImg = styled.div `
  background-image: url(${imageBanner});
  background-size:cover;
  background-position: center center;
  border-radius: 100vw;
  width: 40%;
  height: 80vh;
  padding: 2rem 0;
  @media screen and (max-width: 700px){
    width: 100%;
  }
 `

export const LandingImgBox = styled.div `
  background-image: url(${imageBanner2});
  background-size:cover;
  background-position: center center;
  width: 40%;
  height: 700px;
  
  @media screen and (max-width: 700px){
    width: 100%;
  }
  `;

export const FooterImg = styled.div `
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
  margin: 30px;
  align-items: center;
  padding: 0 2em;

  p {
    padding: 2rem 0;
    width: 70%;
    color: var(--orange);

  }
  @media screen and (max-width: 700px){
    flex-direction: column;
    margin: 20px auto;
    text-align: center;
    flex-direction: column-reverse;
    p {
    width: 100%;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: light;
    margin: 10px auto;
    line-height: 1.5em;
    @media screen and (max-width: 700px) {
      font-size: 2em;
    }
}
`

export const TitleLanding = styled.h1 `
  font-size: 7em;
  width: 80%;
  margin: 4px 0;
  color: var(--orange);
  letter-spacing: .2rem;
  line-height: 7rem;
  padding: 1rem 0;

    @media screen and (max-width: 700px){
      width: 100%;
      font-size: 5em;
      margin: 2rem auto;
      padding:  0;
      line-height: 6rem;
    }
`

export const H2 = styled.h2 `
      color: var(--orange);
      margin: 0 auto;
      font-size: 40px;
      padding: 1em;
   @media screen and (max-width: 700px){
      width: 100%;
      font-size: 2em;
      margin: 0 auto;

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