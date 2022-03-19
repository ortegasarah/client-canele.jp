// import { uploadWs } from "../../services/upload-ws";
import Product from "../components/ProductCard/ProductCard";
import styled from "styled-components";
import { FooterImg, H2 } from "../components/Landing/LandingStyles"
import { H1 } from "../globalStyles";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProduct } from '../Redux/actions/productActions'
import { Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
    margin: 0 auto;
    padding: 10px 15%;
    height: 100vh;
`;

const Ul = styled.ul`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(var(--smalldesktopcount), 1fr);
    --smalldesktopcount: 3;
`

const Shop = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => {
        console.log(state)
        return state.getProduct
    });
    const { products, loading, error } = getProducts;

    console.log("products from getProducts", getProducts)
    useEffect(() => {
          dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            <Wrapper>
                <H1>カヌレ Canelés</H1>

                {/* <Route to="/ProductDetail" component={ProductDetail}> <h1>One product</h1></Route> */}

                {loading ? <H2>Loading...</H2> : error ? <H2>{error}</H2> : products.map((products) => (
                    <Product  
                    key={products._id} 
                    productsId={products._id}
                    name={products.name}
                    price={products.price}
                    image_url={products.image_url}
                    />))}

                <H1>ドリンク Drinks</H1>
            </ Wrapper >
            
        </>


    )
}

export default Shop