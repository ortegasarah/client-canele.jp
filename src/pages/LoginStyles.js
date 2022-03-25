import styled from "styled-components";
import imgStore from '../assets/signup.jpg'

export const Wrapper = styled.section `
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
      
  @media screen and (max-width: 950px){
    flex-direction: column;
    }
`
export const SectionForm = styled.div `
    width: 50%;
    /* padding: 2em; */
    text-align: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 950px){
      width: 80%;
      padding: 0em;
      margin-bottom:3em;
  }

  @media screen and (max-width: 715px){
    /* width: 100%;
    padding: 0em; */
  }
`

export const SectionImg = styled.div `
  background-image: url(${imgStore});
  background-size:cover;
  background-position: center center;
  width: 50%;
  height: 100vh;
  
  @media screen and (max-width: 950px){
    display: none;
  }
`