import { ButtonOrange } from "../../globalStyles";
// import { uploadWs } from "../../services/upload-ws";
import box01 from "../../assets/ig-01.png";
import { ImgProduct, Detail, DivCard } from "./ProductCardStyles"
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions'

const ProductCard = ({ name, image_url, price, _id }) => {


    return (
        <DivCard>
            <Detail>
                <Link to={`/products/${_id}`}>

                    <ImgProduct src={image_url[0]} alt={name} />

                    <h1>{name}</h1>
                    <p>円{price}</p>
                </Link>

                {/* onclick={() => addToCartHandler(product._id, qty)} */}
                <ButtonOrange>Add to Cart</ButtonOrange>
            </Detail>

        </DivCard >


    )
}

export default ProductCard