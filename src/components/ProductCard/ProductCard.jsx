import { ButtonOrange } from "../../globalStyles";
// import { uploadWs } from "../../services/upload-ws";
import box01 from "../../assets/ig-01.png";
import { ImgProduct, Detail, DivCard } from "./ProductCardStyles"
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../Redux/actions/cartActions'

const ProductCard = ({ name, image_url, price, _id }) => {
    // const dispatch = useDispatch();
    // const { products, loading, error } = getProducts;

    // const addToCartHandler = () => {
    //     dispatch(addToCart(products._id))
    //     products.push('/cart')
    // }
    return (
        <DivCard>
            <Detail>
            <Link to={`/products/${_id}`}>

                <ImgProduct src={image_url[0]} alt={name} />
               
                    <h1>{name}</h1>
                    <p>円{price}</p>
            </Link>
            {/* <select>
    {[...Array(product.count).keys()].map(
        (x) => (
            <option key = { x + 1 }>
                { x + 1 }
            </option>
        )
    )}
</select> */}

            <ButtonOrange>Add to Cart</ButtonOrange>
        </Detail>
            
        </DivCard >


    )
}

export default ProductCard