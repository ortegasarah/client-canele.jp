import * as actionTypes from '../constants/cartConst'
import {
    getCartWs,
    deleteCartWs,
    createCartWs
} from '../../services/cart-ws'


export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const {
        data
    } = await createCartWs({
        product: id,
        quantity,
    })

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            image_url: data.image_url,
            price: data.price,
            flavors: data.flavors,
            stock: data.stock,
            quantity

        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}


export const adjustQty = (id, value, quantity) => async (dispatch, getState) => {
    const {
        data
    } = await createCartWs({
        product: id,
        quantity
    })
    dispatch({
        type: actionTypes.ADJUST_QTY,
        payload: {
            product: data._id,
            quantity: value
        }
    })
}