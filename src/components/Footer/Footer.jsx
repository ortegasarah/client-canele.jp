import React from "react";
import logo2 from "../../assets/logo-full.svg";
import { SectionFooter } from "./FooterStyles"


const locations = document.querySelectorAll("section.times.div")
locations.forEach(location => {
    const output = document = location.querySelector("output")

    output.innerHTML= "hi"
})

const Footer = () => {
    return (
        <>

            <SectionFooter>
            <img src={logo2} alt="" width="300px"  />
                    <div>
                        <h4>Account</h4>
                        <ul>
                            <li>Sign Up</li>
                            <li>Log in</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Our company</h4>
                        <ul>
                            <li>Shop</li>
                            <li>Our Story</li>
                            <li>Who are we?</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li>F.A.Q</li>
                            <li>Contact</li>
                        </ul>
                    </div>
            </SectionFooter>
        </>
    )
}

export default Footer;
