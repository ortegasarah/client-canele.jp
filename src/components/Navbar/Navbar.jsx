import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.js";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { Header, Menu } from "./styles";
import logo from "../../assets/canele-logo.png";
import signup from "../../assets/avatar-profile-user-account.svg";
import cart from "../../assets/shopping-bag.svg";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ModalInner from "../ModalInner/ModalInner";
import GlobalStyle, { ButtonBlack } from '../../globalStyles';


const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };


  return (
    <Header>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <Menu><Link to={PATHS.HOMEPAGE}> SHOP </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> OUR STORY </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> F.A.Q </Link></Menu>
      </ul>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              <img src={signup} alt="signup" height="40px" />
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
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
      </div>
    </Header>
  );
};

export default Navbar;
