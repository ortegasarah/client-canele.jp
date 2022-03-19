import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../Redux/actions/productActions'
import { addToCart } from '../Redux/actions/cartActions'
import { Section, StickyImSgSection, TextDetail, ProductButtonSection } from './ProductDetailStyles'
import { ButtonCart, ButtonOrange, H1 } from '../globalStyles'
import { StickyContainer, Sticky } from 'react-sticky';
import { useLocation, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const params = useParams()
    
    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(()=>{
        dispatch(getProductDetails(params.id))
    },[] )
console.log("product", product)
    return (
        loading ? <p>Loading</p> : 
        <>
            <Section>
                <StickyImSgSection>
                {!product.image_url ? <span>no image</span>  : product.image_url.map((image, idx) =>{
                    return (<img src={image} key={idx} alt={product.name}/>)
                })}

                    {/* <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452786/CaneleDuJapon/8box02_x5jzbf.png' width={800} />
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452766/CaneleDuJapon/6box04_t1ispp.jpg' width={800} />
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452766/CaneleDuJapon/6box02_ctsucl.jpg' width={800} />
                    <img src='https://res.cloudinary.com/oatseven/image/upload/v1647452861/CaneleDuJapon/boxes_gnbkys.png' width={800} /> */}
                </StickyImSgSection>
                <TextDetail>
                    <H1>{product.name}</H1>
                    <p>{product.description}</p>
                    <ProductButtonSection>
                        <ButtonOrange>White</ButtonOrange>
                        <ButtonOrange>Almond</ButtonOrange>
                        <ButtonOrange>Roasted green tea</ButtonOrange>
                        <ButtonOrange>Roasted black soy flour</ButtonOrange>
                        <ButtonOrange>Matcha red bean</ButtonOrange>
                        <ButtonOrange>Brown sugar walnut</ButtonOrange>
                    </ProductButtonSection>

                    <ButtonCart> <span>円{product.price}</span> <span>Add to cart</span> </ButtonCart>
                </TextDetail>
                {/* <img src={image_url[0]} alt={name} />
<h1>{name}</h1>
<p>{description}</p>
<p>円{price}</p> */}
            </Section>
        </>


    )
}

export default ProductDetail