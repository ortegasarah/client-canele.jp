import styled from "styled-components";
import imgStore from '../assets/signup.jpg'

export const Wrapper = styled.section `
    height: 100vh;
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
`
export const SectionForm = styled.div`
    width: 50%;
    padding: 2em;
`

export const SectionImg = styled.div `
  background-image: url(${imgStore});
  background-size:cover;
  background-position: center center;
  width: 50%;
  height: 100vh;
`