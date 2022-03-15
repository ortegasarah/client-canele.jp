// import { uploadWs } from "../../services/upload-ws";
import Product from "../components/ProductCard/ProductCard";
import styled from "styled-components";
import { FooterImg } from "../components/Landing/LandingStyles"
import { H1Stroke } from "../globalStyles";


const Wrapper = styled.section`
    margin: 0 auto;
    padding: 10px 15%;
`;

const Ul = styled.ul`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(var(--smalldesktopcount), 1fr);
    --smalldesktopcount: 3;
`

const Shop = () => {

    return (
        <>
            <Wrapper>
                <H1Stroke>カヌレ Canelés</H1Stroke>
                <Ul>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Ul>
            </ Wrapper >
            <FooterImg />
        </>


    )
}

export default Shop