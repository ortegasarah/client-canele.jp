import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import img from '../../assets/kisetsu.jpeg'
import { ReactComponent as LogoSVG} from '../../assets/logo-name.svg'

export const Nav = styled.nav`
  // display: flex;
  padding: 2em 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #F7F6F2;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  margin: 0 auto; 
  top: 0;
  z-index: 999;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media screen and (max-width: 960px) {
    transition: 0,8s all ease;
  }
  `
export const Logo = styled(LogoSVG)`
  /* width: 100vw; */
  margin: 10em auto;
  padding: 0 15px;
  color: white;
`
export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 768px){
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
export const CenterLogo = styled.div`
margin: 5em auto;
`
export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;


@media screen and (max-width: 760px){
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid blue;
}
`
export const NavLink = styled(LinkR)`
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

  &:hover {
    --d: 100%;
    --p: 100%;
  }
  &:a:hover {
    text-decoration: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items:center;
  
  @media screen and (max-width: 768px){
    display: none;
  }`

// .nav__projectName {
//   color: #e4f9ff;
//   text-decoration: none;
// }

// .authLink {
//   color: #61dafb;
//   text-decoration: none;
//   transition: color 0.2s ease-in-out;
// }

// .authLink + .authLink {
//   padding: 1em;
// }

// .authLink:hover {
//   color: #ffffff;
// }

// .nav-logoutbtn {
//   font-family: inherit;
//   font-weight: inherit;
//   padding: 0.5em 1em;
//   margin-left: 1em;
//   background-color: #5595ff;
//   box-shadow: 0 0 5px 0 aliceblue;
//   border: none;
//   border-radius: 2px;
//   cursor: pointer;
//   color: #e3f2ff;
//   transition: all 0.2s ease-in-out;
//   position: sticky;
//   top: 0;
// }

// .nav-logoutbtn:hover {
//   transform: scale(1.05);
//   background-color: #d13e3e;
// }
