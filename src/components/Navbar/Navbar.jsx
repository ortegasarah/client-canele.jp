import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { FaBars } from "react-icons/fa"
import { useEffect, useState, } from "react";
import { useLocation } from 'react-router-dom'
import { denormalizeData, normalizeData } from '../../utils/formatter';
import { useSelector } from "react-redux";

/* STYLES */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, Logo, CenterLogo, HeroImg, NavClick } from "./NavbarStyles";
import { ButtonOrange, ButtonWhite, H1 } from '../../globalStyles';

/* COMPONENTS */
import Modal from "../Modal/Modal";
import ModalInner from "../ModalInner/ModalInner";
import Cart from "../Cart/Cart";
import CartBtn from "../CartBtn";

/* IMAGES */
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
  const items = useSelector(state => state.cart.items)

  //Create array of object
  const count = denormalizeData(items).reduce((acc, item) => (acc += item.quantity), 0)

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>


        <NavMenu>
          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> OUR STORY </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.HOMEPAGE}> OUR STORES </NavLink>
          </NavItem>
        </NavMenu>
        <Link to={PATHS.HOMEPAGE}>  <img src={canele} alt="logo" height="100px" /> </Link>

        <NavMenu>
          {props.user ? (
            <>
              <NavItem>
                <NavLink to={PATHS.USERPROFILE}>
                  {props.user.firstName}
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to={PATHS.LOGINPAGE} className="authLink">
                  ACCOUNT
                </NavLink>
              </NavItem>

            </>
          )}


          {/* CART SIDE TOGGLE */}
          <NavItem>
            {showCart && (
              <Modal toggleModal={toggleCart}>
                <Cart />
              </Modal>
            )}
            <NavClick onClick={toggleCart}> CART({count})</NavClick>
          </NavItem>
          <Link to={PATHS.SHOP}><ButtonOrange> Order</ButtonOrange>  </Link>
        </NavMenu>


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