/* COMPONENTS */
import { ButtonOrange } from "../../globalStyles"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    return (
        <>
            Cart
            <CartItem />
            <CartItem />
            <CartItem />
            <p>Subtotal (0) Items</p>
            <p>Total Price</p>
            <ButtonOrange>Checkout</ButtonOrange>
        </>
    )
}

export default Cart