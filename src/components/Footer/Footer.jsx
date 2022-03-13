import React from "react";
import logo2 from "../../assets/logo_full.jpg";
import { SectionFooter } from "./styles"


const locations = document.querySelectorAll("section.times.div")
locations.forEach(location => {
    const output = document = location.querySelector("output")

    output.innerHTML= "hi"
})

const Footer = () => {
    return (
        <>
                        <img src={logo2} alt="" width="200px" />

            <SectionFooter>
                <div>
                    <h4>Account</h4>
                    <p>Sign Up</p>
                    <p>Log in</p>
                    <h4>Our company</h4>
                    <p>Shop</p>
                    <p>Our Story</p>
                    <p>Who are we?</p>
                    <h4>Resources</h4>
                    <p>F.A.Q</p>
                    <p>Contact</p>
                </div>
            </SectionFooter>
        </>
    )
}

export default Footer;
