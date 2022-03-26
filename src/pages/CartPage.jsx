import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { denormalizeData } from '../utils/formatter'
/* STYLES */
import CartItemPage from '../components/CartItem/CartItemPage'
import { ButtonOrange, H1 } from '../globalStyles';
import styled from "styled-components";

import {  } from "../";
/* ACTIONS */
import { addToCart, removeFromCart } from '../Redux/actions/cartActions';
import { createOrder } from '../Redux/actions/orderActions';

/* PAYPAL */
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


const Wrapper = styled.section`
    margin: 0 auto;
    padding: 2rem;
`;

const CartPage = () => {

    const [open, setOpen] = useState(false)


    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items);
    const cartItems = denormalizeData(items);
    const total = denormalizeData(items).reduce((acc, item) => (acc += item.info.price * item.quantity), 0)

    const qtyChangeHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity))
    }
    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }


    /* CREATE ORDER */
    const handleCreateOrder = () => {
        const items = cartItems.map((item) => ({
            quantity: item.quantity,
            product: item.info._id,
        }));
        const order = { items, total };
        console.log(order);
        dispatch(createOrder(order));
    }


    /* PAYPAL */
    // This values are the props in the UI
    const amount = "5170";
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


        return (
            <>
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
                        return actions.order.capture().then(function (details) {
                            handleCreateOrder()
                            console.log("details are", details)


                        });
                    }}
                />
            </>
        );
    }


    return (
        <Wrapper>
            <H1>Order Summary</H1>
            <table>
                <tbody>
                    <tr>
                        <th>Item</th>
                        {/* <th>Price</th>
                        <th>Subtotal</th> */}
                    </tr>
                </tbody>
                <tbody>

                    <tr>total 円{total}</tr>
                </tbody>
            </table>
            <div>
                {cartItems.length === 0 ? (
                    <div>
                    <p>Your cart is empty</p>
                        <Link to="/">Go Back</Link>
                        </div>
                ) : (cartItems.map(product =>
                    <CartItemPage
                        product={product.info}
                        key={product}
                        qtyChangeHandler={qtyChangeHandler}
                        removeHandler={removeHandler}
                    />)
                )
                }
            </div>
            <p>Item</p>



            {open ? (
                <PayPalScriptProvider
                    options={{
                        "client-id": "AZXXZVtCF6o7WU-uCAOSXYKvOcCQ0unl4YkkrIjlErC14HtTrP9sZr8AzHih7PBN98KJy079RNE2k-fM",
                        components: "buttons",
                        currency: "JPY"
                    }}
                >
                    <ButtonWrapper
                        currency={currency}
                        showSpinner={false}
                    />
                </PayPalScriptProvider>
            ) : (
                <ButtonOrange onClick={() => setOpen(true)}> Checkout</ButtonOrange>
            )}

        </Wrapper>

    )
}

export default CartPage