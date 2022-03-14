import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.js";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn } from "./NavbarStyles";
import { FaBars } from "react-icons/fa"
import logo from "../../assets/canele-logo.png";
import signup from "../../assets/avatar-profile-user-account.svg";
import cart from "../../assets/shopping-bag.svg";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ModalInner from "../ModalInner/ModalInner";
import GlobalStyle, { ButtonBlack, ButtonGreen } from '../../globalStyles';


const Navbar = ( props, {toggle}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };


  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to={PATHS.HOMEPAGE} className="nav__projectName">
          <img src={logo} alt="Logo Canele du Japon" />

        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>

          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> SHOP </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> OUR STORY </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> F.A.Q </NavLink>
          </NavItem>
        </NavMenu>

        <NavBtn>
          {props.user ? (
            <>
              <NavLink to={PATHS.USERPROFILE}>
                User Name
              </NavLink>
              <ButtonBlack onClick={props.handleLogout}> Logout
              </ButtonBlack>
            </>

          ) : (
            <>
              <Link to={PATHS.SIGNUPPAGE} className="authLink">
                <img src={signup} alt="signup" height="40px" />
              </Link>
              <Link to={PATHS.AUTH} className="authLink">
                Log In
              </Link>
              <img src={cart} alt="cart" height="40px" />

              {showModal && (
                <Modal toggleModal={toggleModal}>
                  <ModalInner />
                </Modal>
              )}

              <ButtonBlack onClick={toggleModal}>Sign Up </ButtonBlack>
            </>
          )}
        </NavBtn>


        {/* 
      <ul>
        <Menu><Link to={PATHS.HOMEPAGE}> SHOP </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> OUR STORY </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> F.A.Q </Link></Menu>
      </ul> */}


      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
