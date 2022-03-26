import React from 'react'
import Delivery from '../components/Delivery/Delivery'
import { H1 } from '../globalStyles'
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0 auto;
    padding: 2rem;
    justify-content: center;
`;
export default function Stores() {
    return (
        <Wrapper>
            <H1>Come visit us!</H1>
            <Delivery />
        </Wrapper>
    )
}
