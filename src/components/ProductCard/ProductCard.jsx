import { ButtonOrange } from "../../globalStyles";
// import { uploadWs } from "../../services/upload-ws";
import box01 from "../../assets/ig-01.png";
import { ImgProduct, Detail, Li, H3, H4 } from "./ProductCardStyles"
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";

const Product = (name, image_url, price, id) => {

    return (
        <>
        <h1>ProductName</h1>
            <Li>

                <Link to={`/products/${id}`}>
                    <ImgProduct src={image_url[0]} alt={name} />
                    <Detail>
                        <h1>{name}</h1>
                        <p>円{price}</p>
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
                </Link>
            </Li>
        </>


    )
}

export default Product