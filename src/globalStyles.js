import styled, { createGlobalStyle, css } from "styled-components";
import { Link as LinkB } from "react-router-dom";

 const GlobalStyle = createGlobalStyle`
    :root {
    --orange: #F88C3B;
    --yellow: #F9C04C;
    --beige: #F7F6F2;
    }

    * {
        margin: 0;
        padding: 0;
        /* background-color: #fff; */
        font-family: Open-Sans, Helvetica, Sans-Serif;
        /* overflow-x: hidden; */
        overflow: auto;

    }
    body { 
        background-color: var(--beige);

}
    }




    p {
        font-family: 'DM Sans', sans-serif;
        color: var(--orange);
        font-size: 20px;
    }

    a {
        color: var(--orange);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
      }
`;
 
export const H1 = styled.h1`
    margin: 0 auto;
    padding: 10px 0 ;
    font-weight: 200;
    font-size: 7rem;
    text-align: left;
    color: var(--orange);

    @media screen and (max-width: 1310px) {
        font-size: 5rem;  
    }
    @media screen and (max-width: 760px) {
        font-size:3rem;  
    }
`


export const ButtonWhite = styled.button`
    border-radius: 100vw;
    color: var(--orange);
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.5em 2em;
    border: 3px solid var(--beige);
    width: fit-content;
    background-color: var(--beige);

    &:hover {
        background-color:transparent;
        border: 3px solid var(--beige);
        color: var(--beige);
        }
        
    @media screen and (max-width: 1420px){
    margin: 2rem auto;
    }
`

export const ButtonOrange = styled.button`
    border-radius: 100vw;
    color: var(--orange);
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.5em 2em;
    border: 2px solid var(--orange);
    width: fit-content;
    background-color: transparent;
    margin: 10px auto;
    display: flex;
    &:hover {
        background-color: var(--orange);
        border: 2px solid var(--orange);
        color: var(--beige);
        }
        
    @media screen and (max-width: 1420px){
    margin: 2rem auto;
    }
`

export const ButtonCart = styled.button`
    border-radius: 100vw;
    color: var(--beige);
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.5em 2em;
    border: 2px solid var(--orange);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--orange);
    
    &:hover {
        background-color: var(--beige);
        border: 2px solid var(--orange);
        color: var(--orange);
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