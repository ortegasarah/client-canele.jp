import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

/* STYLES */
import { Section, StickyImSgSection, TextDetail, ProductButtonSection } from './ProductDetailStyles'
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

    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, product,])


    /* CART */
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, quantity));
        id.push(`/cart`);
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

                            <p>
                                Qty
                                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                    {[...Array(product.stock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>

                            <ButtonCart type="button" onclick={addToCartHandler}>
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