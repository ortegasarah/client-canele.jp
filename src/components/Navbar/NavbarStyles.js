import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkB } from "react-router-dom";
import { Link as LinkL } from "react-router-dom";
import img from '../../assets/kisetsu.jpeg'
import { ReactComponent as LogoSVG} from '../../assets/logo-name.svg'

export const Nav = styled.nav`
  /* display:flex; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--beige);
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  /* margin: -80 auto 0 auto; */
  position: sticky;
  top: 0;
  z-index: 999;
  height: 100px;

  background-color: var(--beige);
  @media screen and (max-width: 960px) {
    transition: 0,8s all ease;
  }
`

export const HeroImg = styled.section`
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  text-align:center;
`

export const Logo = styled(LogoSVG)`
  width: 80vw; 
  margin: 10em auto;
  padding: 0 15px;
  color: white;
`

export const NavbarContainer = styled.div `
  /* display: flex; */
  /* justify-content: space-between; */
  /* height: 80px; */
  z-index: 1;
  /* width: 100px; */
  padding: 0 24px;
  max-width: 1100;
  align-items: center;

`
export const NavLogo = styled(LinkR)`
  display: flex;
  color: #fff;
  justify-self: flex-start;

  img {
    width: 300px;
  }
  /* width: 10px; */
  @media screen and (max-width: 760px){
   
}

`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;

}
`
export const NavMenu = styled.ul `
  /* display: flex; */
  align-items: center;
  list-style: none;
  text-align: right;
  /* margin-right: -22px; */
  padding-top: 40px;


@media screen and (max-width: 760px){
  display: none;
}
`

export const NavItem = styled.li`
  height: 80px;
  color: #000;
  float: none;
  display: inline-block;
  /* display: flex; */
  align-items: center;
  text-decoration: none;
  padding: rem;
  height: 100%;
  cursor: pointer;

  :nth-child(1) {
    float: left;
  }

  :nth-child(2) {
    float: left;
  }
  :nth-child(3) {
    float: right;
  }
  :nth-child(4) {
    float: right;
  }
  :nth-child(5) {
    float: right;
  }
`

export const NavLink = styled(LinkR)`
  display:block;
  cursor:pointer;
  list-style: none;
  padding: 0 10px;

  background: 
    linear-gradient(currentColor 0 0) 
    var(--p, 0) 100% /var(--d, 0) 2px 
  no-repeat;
  transition: 0.3s, background-position 0s 0.3s;

  &:hover {
    --d: 100%;
    --p: 100%;
  }
  &:a:hover {
    text-decoration: none;
  }
`
export const NavClick = styled.p`
display:inline-block;
  cursor:pointer;
  margin: 0;
  padding: 0 10px;
  list-style: none;
  background: 
    linear-gradient(currentColor 0 0) 
    var(--p, 0) 100% /var(--d, 0) 2px 
  no-repeat;
  transition: 0.3s, background-position 0s 0.3s;
  font-size: 1rem;
  &:hover {
    --d: 100%;
    --p: 100%;
  }
  &:a:hover {
    text-decoration: none;
  }
`

export const NavBtn = styled.nav`
  /* display: flex; */
  align-items:center;
  
  @media screen and (max-width: 768px){
    display: none;
  }`
export const NavBtnLink = styled(LinkB)`
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
    /* display: flex; */
    &:hover {
        background-color: var(--orange);
        border: 2px solid var(--orange);
        color: var(--beige);
        }
        
    @media screen and (max-width: 1420px){
    margin: 2rem auto;
    }

`
export const BrandLogo = styled(LinkL)`
  position: absolute;
  left:50%;
  transform: translateX()-50%;
  top:0;
`