import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/* STYLES */
import CartItem from '../components/CartItem/CartItem'

/* ACTIONS */
import { addToCart, removeFromCart } from '../Redux/actions/cartActions';

/* PAYPAL */
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


const CartPage = () => {
    // This values are the props in the UI
    const amount = "2";
    const currency = "JPY";
    const style = { "layout": "vertical" };
    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
        );
    }





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

            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "JPY"
                }}
            >
                <ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
            </PayPalScriptProvider>
        </>

    )
}

export default CartPage