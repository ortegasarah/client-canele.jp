import {
    createOrdertWs,
    getOrderWs,
    idOrderWs
} from '../../services/order-ws'
import * as actionTypes from '../constants/orderConst'


export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.CREATE_ORDER_REQUEST,
            payload: {
                order
            }
        })
        const {
            data,
            status,
            errorMessage
        } = await createOrdertWs(order)
        if (status) {
            dispatch({
                type: actionTypes.CREATE_ORDER_SUCCESS,
                payload: data.result
            })
        } else {
            dispatch({
                type: actionTypes.CREATE_ORDER_FAIL,
                payload: errorMessage
            })
        }


        //if user is logged
    } catch (error) {
        dispatch({
            type: actionTypes.CREATE_ORDER_FAIL,
            payload: error
        })
    }

}

export const getOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.GET_ORDER_REQUEST,
            payload: id
        })
        const {
            data,
            status,
            errorMessage
        } = await createOrdertWs()

        if (status) {
            dispatch({
                type: actionTypes.GET_ORDER_SUCCESS,
                payload: data.result
            })
        } else {
            dispatch({
                type: actionTypes.GET_ORDER_FAIL,
                payload: errorMessage
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ORDER_FAIL,
            payload: error
        })
    }
}