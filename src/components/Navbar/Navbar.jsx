import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react";

/* STYLES */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, Logo, CenterLogo, HeroImg } from "./NavbarStyles";
import GlobalStyle, { ButtonBlack, ButtonGreen, ButtonWhite } from '../../globalStyles';

/* COMPONENTS */
import Modal from "../Modal/Modal";
import ModalInner from "../ModalInner/ModalInner";
import Cart from "../Cart/Cart";
import HomePage from "../../pages/HomePage"
/* IMAGES */
import signup from "../../assets/avatar-profile-user-account.svg";
import cart from "../../assets/shopping-bag.svg";
import canele from "../../assets/canele-illu.png";



const Navbar = (props, { toggle }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart((showCart) => !showCart);
  };


  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        {<HomePage /> ? 
      <HeroImg/>
      :
      <img src={canele} alt="logo" height="100px"  />
      }
        <NavMenu>

          <NavItem>
            <NavLink to={PATHS.SHOP}> SHOP </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> OUR STORY </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> OUR STORES </NavLink>
          </NavItem>
        </NavMenu>
        <img src={canele} alt="logo" height="100px"  />

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
              {showModal && (
                <Modal toggleModal={toggleModal}>
                  <ModalInner />
                </Modal>
              )}

              <ButtonBlack onClick={toggleModal}>Sign Up </ButtonBlack>

            </>
          )}


          {/* CART SIDE TOGGLE */}
          {showCart && (
            <Modal toggleModal={toggleCart}>
              <Cart />
            </Modal>
          )}
          <img src={cart} alt="cart" height="40px" onClick={toggleCart} />


          <Link to={PATHS.SHOP}><ButtonWhite> Order</ButtonWhite>  </Link>
        </NavBtn>


        {/* 
      <ul>
        <Menu><Link to={PATHS.HOMEPAGE}> SHOP </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> OUR STORY </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> F.A.Q </Link></Menu>
      </ul> */}


      </NavbarContainer>
      <CenterLogo><Logo /></CenterLogo>

    </Nav>
  );
};

export default Navbar;
