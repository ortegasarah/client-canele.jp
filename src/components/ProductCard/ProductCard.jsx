import { ButtonGreen } from "../../globalStyles";
// import { uploadWs } from "../../services/upload-ws";
import box01 from "../../assets/ig-01.png";
import { ImgProduct, Detail, Li, H3, H4 } from "./ProductCardStyles"
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";

const Product = () => {

    return (
<>
<Li>
    <Link to={PATHS.HOMEPAGE}>
        <ImgProduct src={box01} alt=""/>
        <Detail>
            <H3>NamOfProfuct</H3>
            <H4>Description 円 Price</H4>
            <ButtonGreen>Add to Cart</ButtonGreen>
        </Detail>
    </Link>
</Li>
</>


    )}

export default Product