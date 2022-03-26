import React from "react";
import { Link, Route } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { denormalizeData } from '../../utils/formatter';

/* STYLES */
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./SidebarStyles";

/* IMAGES */
import cart from "../../assets/shopping-bag.svg";
import { ButtonOrange } from "../../globalStyles";

/* HAMBURGER MENU TOGGLED WHEN SMALL SCREEN */
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}> SHOP </SidebarLink>
          <SidebarLink to="/" onClick={toggle}> OUR STORY  </SidebarLink>
          <SidebarLink to="/" onClick={toggle}> F.A.Q </SidebarLink>
          <SidebarLink to="/" onClick={toggle}> Sign up  </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Link to={PATHS.LOGINPAGE}><ButtonOrange>Log in</ButtonOrange></Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;