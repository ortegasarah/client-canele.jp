import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

/* STYLES */
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./SidebarStyles";

/* IMAGES */
import cart from "../../assets/shopping-bag.svg";

/* HAMBURGER MENU TOGGLED WHEN SMALL SCREEN */
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Link to={PATHS.AUTH}>
          <img src={cart} alt="cart" height="40px" />
        </Link>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}> SHOP </SidebarLink>
          <SidebarLink to="/" onClick={toggle}> OUR STORY  </SidebarLink>
          <SidebarLink to="/" onClick={toggle}> F.A.Q </SidebarLink>
          <SidebarLink to="/" onClick={toggle}> Sign up  </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;