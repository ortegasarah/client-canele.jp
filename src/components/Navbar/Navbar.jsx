import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.js";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { Header } from "./styles";
import logo from "../../assets/canele-logo.png";


const Navbar = (props) => {
  return (
    <Header>
       <Link to={PATHS.HOMEPAGE} className="nav__projectName">
       <img src={logo} alt="" />
      </Link>

      <Link to={PATHS.HOMEPAGE}> SHOP </Link>
      <Link to={PATHS.HOMEPAGE}> OUR STORY </Link>
      <Link to={PATHS.HOMEPAGE}> F.A.Q </Link>

      
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
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
      </Header>
  );
};

export default Navbar;
