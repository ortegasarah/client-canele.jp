/* COMPONENTS */
import { ButtonOrange, ButtonWhite, H1, DeleteButton } from "../../globalStyles"
import CartItem from "../CartItem/CartItem"
import { CartSection, CartContainer, Total } from "./CartStyles"
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../Redux/actions/cartActions'
import { cartReducers } from '../../Redux/reducers/cartRerducers'
import { Link } from "react-router-dom"
import * as PATHS from "../../utils/paths";
import { denormalizeData } from '../../utils/formatter'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const Cart = () => {
    const location = useLocation()
    const [cartItems, setCartItems] = useState([])
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const total = denormalizeData(items).reduce((acc, item) => (acc += item.info.price * item.quantity), 0)
    const removeProduct = (id, idx) => {
        dispatch(removeFromCart(id))
        let newArray = cartItems.filter(product => product.info._id !== id)
        setCartItems(newArray)
    }
    useEffect(() => {
        setCartItems(denormalizeData(items));
    }, [])


    return (
        <>
            <CartSection>
                <H1>Cart</H1>
                <CartContainer>
                    {cartItems.length === 0 ? (
                        <>
                            <p>Your cart is empty</p>
                            <p><Link to="/shop">START YOUR ORDER</Link></p>
                        </>
                    ) :
                        
                            cartItems.map((products, idx) => (
                                <CartItem
                                    key={products.info._id}
                                    removeProduct={() => removeProduct(products.info._id, idx)}
                                    {...products.info}

                                />

                            )
                            )
                    }
                    <Total>
                                <p>Total 円{total}</p>
                                <Link to={PATHS.CART} >
                                    <ButtonWhite>Checkout</ButtonWhite>
                                </Link>
                            </Total></CartContainer>



                {/* <Link to={PATHS.CART}>View your cart</Link> */}
            </CartSection>
        </>
    )
}

export default Cart