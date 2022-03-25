import * as actionTypes from '../constants/cartConst'
import {
    getCartWs,
    deleteCartWs,
    createCartWs
} from '../../services/cart-ws'


export const addToCart = (product, quantity) => async (dispatch, getState) => {


    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product,
            quantity
        }
    })
};

export const removeFromCart = (id) => (dispatch, getState) => {
    console.log('es el id', id)
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
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