import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../Redux/actions/productActions'
import { addToCart } from '../Redux/actions/cartActions'
import { Section, StickyImSgSection, TextDetail, ProductButtonSection } from './ProductDetailStyles'
import { ButtonCart, ButtonOrange, H1 } from '../globalStyles'
import { StickyContainer, Sticky } from 'react-sticky';

const ProductDetail = ({ match, history }) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    return (
        <>
            <Section>
                <StickyImSgSection>
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452786/CaneleDuJapon/8box02_x5jzbf.png' width={800} />
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452766/CaneleDuJapon/6box04_t1ispp.jpg' width={800} />
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452766/CaneleDuJapon/6box02_ctsucl.jpg' width={800} />
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452861/CaneleDuJapon/boxes_gnbkys.png' width={800} />
                </StickyImSgSection>
                <StickyContainer>
                <TextDetail>
                    <H1>8 Assorted Canelés</H1>
                    <p>Assorted box of 8 canelés, pick your flavors</p>
                    <p>円1560</p>
                    <ProductButtonSection>
                        <ButtonOrange>White</ButtonOrange>
                        <ButtonOrange>Almond</ButtonOrange>
                        <ButtonOrange>Roasted green tea</ButtonOrange>
                        <ButtonOrange>Roasted black soy flour</ButtonOrange>
                        <ButtonOrange>Matcha red bean</ButtonOrange>
                        <ButtonOrange>Brown sugar walnut</ButtonOrange>
                    </ProductButtonSection>

                    <ButtonCart> <span>円1560</span> <span>Add to cart</span> </ButtonCart>
                </TextDetail>
                </StickyContainer>
                {/* <img src={image_url[0]} alt={name} />
<h1>{name}</h1>
<p>{description}</p>
<p>円{price}</p> */}
            </Section>
        </>


    )
}

export default ProductDetail