import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem/CartItem'

import { addToCart, removeFromCart } from '../Redux/actions/cartActions';

const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity))
    }
    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <>
            <div>Your order</div>
            <table>
                <thread>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thread>
                <tbody>
                    {cartItems.length === 0 ? (
                        <div>Your cart is empty
                            <Link to="/">Go Back</Link></div>
                    ) : cartItems.map(product =>
                        <CartItem product={product}
                            key={product}
                            qtyChangeHandler={qtyChangeHandler}
                            removeHandler={removeHandler}
                        />)
                    }
                    <button onClick={() => removeHandler(product)}>delete</button>
                    <tr>Title</tr>
                    <tr>price</tr>
                    <tr>total</tr>
                </tbody>
            </table>
            <p>Item</p>
        </>
    )
}

export default CartPage