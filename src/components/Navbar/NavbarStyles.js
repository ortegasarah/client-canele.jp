import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import img from '../../assets/kisetsu.jpeg'
import { ReactComponent as LogoSVG} from '../../assets/logo-name.svg'

export const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--beige);
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  margin: 0 auto; 
  position: sticky;
  top: 0;
  z-index: 999;
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
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  z-index: 1;
  /* width: 100px; */
  padding: 1rem;
  max-width: 1100;
  align-items: center;
`

export const LogoNav = styled.div`
position: relative;

@media screen and (min-width: 768px){
  position: absolute;
  left: 50%;
  transform: translateX(-50px);
}
`


export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
  display: block;
  position: absolute;
  right: 0;
  transform: translate(-100%,25%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
}
`
export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align: center;
/* margin-right: -22px; */
@media screen and (max-width: 760px){
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
color: #000;
/* display: flex;
align-items: center;
text-decoration: none; */
padding: 0 1rem;
height: 100%;
cursor: pointer;
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
