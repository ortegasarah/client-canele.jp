import styled from "styled-components";
import imageBanner from '../../assets/landing.jpg';
import imageBanner2 from '../../assets/landingBox.jpg';

export const LandingImg = styled.img.attrs({
  src: `${imageBanner}`
})
`
    // height: 563px;
    width: 65%;
    border-radius: 20px;
    position: relative;
`;

export const Landinggg = styled.div`
background-image: ${imageBanner};
background-size:cover;
width: 500px;
 `

export const LandingImgBox = styled.img.attrs({
  src: `${imageBanner2}`
})
`
      // height: 563px;
      width: 45%;
      border-radius: 20px;
      position: relative;
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
  padding: 20px;
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