import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

 const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #fff;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    h1 {
        font-family: 'Sansita', sans-serif;
        color: #000;
    }

    p {
        font-family: 'DM Sans', sans-serif;
        color: #000;
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

    &:hover {
        color: #fff;
        background-color: #000;
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

    &:hover {
        color: #fff;
        background-color: #0D8F44;
        }
`

export default GlobalStyle