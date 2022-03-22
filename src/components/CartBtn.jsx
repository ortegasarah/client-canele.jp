import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { removeFromCart } from '../Redux/actions/cartActions'

const CartBtn = () => {
    const state = useSelector((state) => state.cartReducers)
    const dispatch = useDispatch()

    const handleClose = (item) => { dispatch(removeFromCart(item)) }
    return (
        <>
            {/* <NavLink to="/cart">Cart({state.length})</NavLink> */}
        </>
    )
}

export default CartBtn