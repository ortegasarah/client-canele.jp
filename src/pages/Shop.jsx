// import { uploadWs } from "../../services/upload-ws";
import Product from "../components/ProductCard/ProductCard";
import styled from "styled-components";


const Wrapper = styled.section`
height: 100vh;
margin: 0 auto;
padding: 10px 15%;
`;

const Ul = styled.ul`
margin: 0 auto;
display: grid;
grid-template-columns: repeat(var(--smalldesktopcount), 1fr);
--smalldesktopcount: 3;
`
const H1 = styled.h1`
margin: 0 auto;
padding: 10px 0 ;
font-weight: 700;
font-size: 50px;
text-align: center;
`

const Shop = () => {

    return (
        <>
            <Wrapper>
                <H1>カヌレ Canelé</H1>
                <Ul>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                </Ul>
                </ Wrapper >
            </>


    )}

            export default Shop