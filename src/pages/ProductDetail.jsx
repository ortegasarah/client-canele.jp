import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaMinus, FaPlus } from "react-icons/fa";

/* STYLES */
import { Section, StickyImSgSection, TextDetail, ProductButtonSection, QuantityButton } from './ProductDetailStyles'
import { ButtonCart, ButtonOrange, H1 } from '../globalStyles'
import { H2 } from '../components/Landing/LandingStyles';

/* ACTIONS */
import { addToCart } from '../Redux/actions/cartActions'
import { getProductDetails } from '../Redux/actions/productActions'

const ProductDetail = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }
    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, product,])


    /* CART */
    const addToCartHandler = () => {
        dispatch(addToCart(product, quantity));
    };

    return (
        loading ? <p>Loading</p> :
            <>
                <Section>
                    <StickyImSgSection>
                        {!product.image_url ? <span>no image</span> : product.image_url.map((image, idx) => {
                            return (<img src={image} key={idx} alt={product.name} />)
                        })}
                    </StickyImSgSection>

                    {loading ? <H2>Loading...</H2> : error ? <h2>Ups! There was an error! Please refresh the page or come back later</h2> :

                        <TextDetail>
                            <H1>{product.name}</H1>
                            <p>{product.description}</p>

                            <QuantityButton>
                                <FaMinus onClick={() => handleQuantity("dec")} />
                                <p>{quantity}</p>
                                <FaPlus onClick={() => handleQuantity("inc")} />
                            </QuantityButton >

                            <ButtonCart type="button" onClick={addToCartHandler}>
                                <span>円{product.price}</span>
                                <span>Add to cart</span>
                            </ButtonCart>
                        </TextDetail>
                    }
                </Section>
            </>


    )
}

export default ProductDetail