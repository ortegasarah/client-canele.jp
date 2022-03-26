import React from 'react'
import { H2 } from '../components/Landing/LandingStyles'
import { H1 } from '../globalStyles'
import canele from "../assets//canele-illu.png";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths";
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 5em;
`
export default function SuccesOrder() {
  return (
    <Wrapper>

        <H1>Thank you for your order</H1>
        <H2>We will send you an email when we'll ship your order.</H2>
        <Link to={PATHS.HOMEPAGE}>  <img src={canele} alt="logo" height="300px" /> </Link>

    </Wrapper>
  )
}
