import styled, { createGlobalStyle, css } from "styled-components";
import { Link as LinkB } from "react-router-dom";

 const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        /* background-color: #fff; */
        font-family: Open-Sans, Helvetica, Sans-Serif;
        overflow-x: hidden;

    }

    h1 {
        /* font-family: 'Sansita', sans-serif; */
        font-family: Open-Sans, Helvetica, Sans-Serif;
        color: #000;
    }


    p {
        font-family: 'DM Sans', sans-serif;
        color: #000;
        font-size: 20px;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
      }

    a:active {
        color: 0D8F44;
    }
`;
 
export const H1Stroke = styled.h1`
margin: 0 auto;
padding: 10px 0 ;
font-weight: 700;
font-size: 50px;
text-align: center;
color: #000;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1.4px;
    -webkit-text-stroke-color: black;
`


export const ButtonBlack = styled.button`
    border-radius: 44px;
    color: #000;
    font-size: 22px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.5em 2em;
    border: 1px solid #000;
    background-color: #fff;
    width: fit-content;
    margin: 3rem 0;
    
    &:hover {
        color: #fff;
        background-color: #000;
    }

    @media screen and (max-width: 1420px){
        margin: 3rem auto;
        }
`

export const ButtonGreen = styled.button`
    border-radius: 44px;
    color: #0D8F44;
    font-size: 22px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.5em 2em;
    border: 1px solid #0D8F44;
    background-color: #fff;
    width: fit-content;
    margin: 2rem 0;


    &:hover {
        color: #fff;
        background-color: #0D8F44;
        }
        
    @media screen and (max-width: 1420px){
    margin: 2rem auto;
    }
`

export const AbsoluteCenter = css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;
export default GlobalStyle