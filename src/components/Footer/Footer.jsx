import React from "react";
import { SectionFooter, WrapperFooter, ColummFooter, LogoFooter } from "./FooterStyles"


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
                            <li>Sign Up</li>
                            <li>Log in</li>
                        </ul>
                    </ColummFooter>

                    <ColummFooter>
                        <h3>Our company</h3>
                        <ul>
                            <li>Shop</li>
                            <li>Our Story</li>
                            <li>Who are we?</li>
                        </ul>
                    </ColummFooter>

                    <ColummFooter>
                        <h3>Resources</h3>
                        <ul>
                            <li>F.A.Q</li>
                            <li>Contact</li>
                        </ul>
                    </ColummFooter>
                </WrapperFooter>
            </SectionFooter>
        </>
    )
}

export default Footer;
