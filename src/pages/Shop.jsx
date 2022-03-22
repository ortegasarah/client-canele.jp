// import { uploadWs } from "../../services/upload-ws";
import ProductCard from "../components/ProductCard/ProductCard";
import styled from "styled-components";
import { FooterImg, H2 } from "../components/Landing/LandingStyles"
import { H1 } from "../globalStyles";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProduct, getProductDetails } from '../Redux/actions/productActions'
import { Route, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
    margin: 0 auto;
    padding: 2rem 0;
    /* height: 100vh; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;



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



    // const total = products.reduce(
    //     (acc, item) => (acc += item.info.price * item.quantity),
    //     0
    // );


    return (
        <div>
            <H1>カヌレ Canelés</H1>                <H1>ドリンク Drinks</H1>


            <Wrapper>

                    {loading ? <H2>Loading...</H2> : products.map((products) => (
                        <ProductCard
                            key={products._id}
                            {...products}
                        />))}
            </ Wrapper >
        </div>


    )
}

export default Shop