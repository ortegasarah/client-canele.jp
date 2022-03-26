import React from "react";
import { SectionFooter, WrapperFooter, ColummFooter, LogoFooter, SocialsIcon } from "./FooterStyles"
import { AiOutlineInstagram, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai"
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";


const locations = document.querySelectorAll("section.times.div")
locations.forEach(location => {
    const output = document = location.querySelector("output")

    output.innerHTML = "hi"
})

const Footer = () => {
    return (
        <>

            <SectionFooter>
                <LogoFooter />
                <WrapperFooter>
                    <ColummFooter>
                        <h3>Account</h3>
                        <ul>
                            <Link to={PATHS.SIGNUPPAGE}>
                                <li>Sign Up</li>
                            </Link>
                            <Link to={PATHS.LOGINPAGE}>
                                <li>Log in</li>
                            </Link>
                        </ul>
                    </ColummFooter>

                    <ColummFooter>
                        <h3>Our company</h3>
                        <ul>
                            <Link to={PATHS.SHOP}>
                                <li>Shop</li>
                            </Link>
                            <Link to={PATHS.ABOUT}>
                                <li>About us</li>
                            </Link>
                            <Link to={PATHS.STORES}>
                                <li>Find our stores</li>
                            </Link>
                        </ul>
                    </ColummFooter>

                    <ColummFooter>
                        <h3>Resources</h3>
                        <ul>
                            <li>F.A.Q</li>
                            <li>Contact</li>
                        </ul>
                    </ColummFooter>
                    <SocialsIcon>
                        <a href="https://www.facebook.com/CANELEJP">
                            <AiOutlineInstagram size={40} />
                        </a>
                        <a href="https://twitter.com/canele_jp">
                            <AiFillTwitterCircle size={40} />
                        </a>
                        <a href="https://www.instagram.com/caneledujapon/">
                            <AiFillFacebook size={40} />
                        </a>
                    </SocialsIcon>
                </WrapperFooter>

            </SectionFooter>
        </>
    )
}

export default Footer;
