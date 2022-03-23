/* COMPONENTS */
import { ButtonOrange, ButtonWhite, H1 } from "../../globalStyles"
import CartItem from "../CartItem/CartItem"
import { CartSection, CartContainer } from "./CartStyles"
import { useSelector, useDispatch} from 'react-redux'
// import { removeFromCart } from '../Redux/actions/cartActions'
import { cartReducers} from '../../Redux/reducers/cartRerducers'



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
                <p>View your cart</p>
            </CartSection>
        </>
    )
}

export default Cart