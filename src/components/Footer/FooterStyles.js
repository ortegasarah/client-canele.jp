import styled from "styled-components";
import {
    ReactComponent as Logo2SVG
} from '../../assets/logo-full.svg'

export const SectionFooter = styled.section `
    color: var(--beige);
    display: flex;
    padding: 5em 2em;
    justify-content: space-between;
    flex-wrap: nowrap;
    background: var(--yellow);
    align-items: center;
    z-index: -100000;

    h3{
        font-size: 1.7em;
        @media (max-width: 1590px) {
            font-size: 1.7em;
        }
        @media (max-width: 1140px) {
            font-size: 1.4em;
        }
        @media (max-width: 400px) {
            font-size: 0.75em;
            margin: 5px 0;
        }
}
    ul {
        list-style: none;
        margin: 20px 0;
        font-size: 2em;
        @media (max-width: 1590px) {
            font-size: 1.4em;
            margin: 15px 0;
        }
        @media (max-width: 1140px) {
            font-size: 1em;
            margin: 10px 0;
        }
        @media (max-width: 400px) {
            font-size: 0.75em;
            margin:  0;
        }
    }

    li {
        margin: 5px 0;
    }

    @media (max-width: 860px) {
        flex-direction:column;
        padding: 4em 1em;
    }
`

export const WrapperFooter = styled.div `
    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content: flex-end;

@media screen and (max-width: 730px) {
    flex-wrap: wrap;
    justify-content: center;
}
`

export const ColummFooter = styled.div `
    display: flex;
    flex-direction: column;
    padding:3em;
    a { color: var(--beige)}
    @media (max-width: 860px) {
        padding: 2em 0 0 0 ;
        margin: 0 auto;
        text-align:center;
    }
`

export const LogoFooter = styled(Logo2SVG)
`
    width: 25%; 
    max-width: 400px;
    @media (max-width: 1140px) {
       width:20%;
    }
    @media screen and (max-width: 400px){
        width:30%;
    }
`


export const SocialsIcon = styled.div `
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 3em;
  a { color: var(--beige)}
`