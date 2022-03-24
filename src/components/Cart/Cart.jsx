/* COMPONENTS */
import { ButtonOrange, ButtonWhite, H1 } from "../../globalStyles"
import CartItem from "../CartItem/CartItem"
import { CartSection, CartContainer } from "./CartStyles"
import { useSelector, useDispatch} from 'react-redux'
// import { removeFromCart } from '../Redux/actions/cartActions'
import { cartReducers} from '../../Redux/reducers/cartRerducers'
import { Link } from "react-router-dom"
import * as PATHS from "../../utils/paths";



const Cart = () => {
    
    return (
        <>
            <CartSection>
                <H1>Cart</H1>
                <CartContainer>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </CartContainer>
                <p>Subtotal (0) Items</p>
                <p>Total Price</p>
                <ButtonWhite>Checkout</ButtonWhite>
                <Link to={PATHS.CART}>View your cart</Link>
            </CartSection>
        </>
    )
}

export default Cart