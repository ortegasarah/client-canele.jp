import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { FaBars } from "react-icons/fa"
import { useEffect, useState,  } from "react";
import {useLocation} from 'react-router-dom'
/* STYLES */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, Logo, CenterLogo, HeroImg } from "./NavbarStyles";
import GlobalStyle, { ButtonOrange, ButtonWhite } from '../../globalStyles';

/* COMPONENTS */
import Modal from "../Modal/Modal";
import ModalInner from "../ModalInner/ModalInner";
import Cart from "../Cart/Cart";
import CartBtn from "../CartBtn";

/* IMAGES */
import signup from "../../assets/avatar-profile-user-account.svg";
import cart from "../../assets/shopping-bag.svg";
import canele from "../../assets/canele-illu.png";



const Navbar = ({ toggle, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart((showCart) => !showCart);
  };

  // const location = useLocation()

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

       
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
        <Link to={PATHS.HOMEPAGE}>  <img src={canele} alt="logo" height="100px"  /> </Link>
       

        <NavBtn>
          {props.user ? (
            <>
              <NavLink to={PATHS.USERPROFILE}>
                Hi
              </NavLink>
              <ButtonOrange onClick={props.handleLogout}> Logout
              </ButtonOrange>
            </>
          ) : (
            <>
              {/* <Link to={PATHS.SIGNUPPAGE} className="authLink">
                <img src={signup} alt="signup" height="40px" />
              </Link> */}
              <Link to={PATHS.LOGINPAGE} className="authLink">
                Account
              </Link>
              {showModal && (
                <Modal toggleModal={toggleModal}>
                  <ModalInner />
                </Modal>
              )}

              {/* <ButtonOrange onClick={toggleModal}>Account </ButtonOrange> */}

            </>
          )}


          {/* CART SIDE TOGGLE */}
          {showCart && (
            <Modal toggleModal={toggleCart}>
              <Cart />
            </Modal>
          )}
          <img src={cart} alt="cart" height="40px" onClick={toggleCart} />
          <h1  onClick={toggleCart}> <CartBtn /></h1>

          <Link to={PATHS.SHOP}><ButtonOrange> Order</ButtonOrange>  </Link>
        </NavBtn>


        {/* 
      <ul>
        <Menu><Link to={PATHS.HOMEPAGE}> SHOP </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> OUR STORY </Link></Menu>
        <Menu><Link to={PATHS.HOMEPAGE}> F.A.Q </Link></Menu>
      </ul> */}


      </NavbarContainer>
      {/* <CenterLogo><Logo /></CenterLogo> */}
      {/* { location.pathname === "/" ? 
      <HeroImg>holaaaa</HeroImg>
      :
      <p>hello</p>} */}
    </Nav>
  );
};

export default Navbar;
