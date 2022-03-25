import { createOrdertWs, getOrderWs, idOrderWs } from '../../services/order-ws'
import * as actionTypes from '../constants/orderConst'


export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: actionTypes.CREATE_ORDER_REQUEST})

//if user is logged
    }catch (error) {
        dispatch({
            type: actionTypes.CREATE_ORDER_FAIL,
            payload: error
        })
}









// export const createOrder = (product, quantity) => async (dispatch, getState) => {

//     dispatch({
//         type: actionTypes.CREATE_ORDER,
//         payload: {
//             
//         }
//     })
// };

// export const getOrder = (id) => (dispatch, getState) => {
//     console.log('order id', id)
//     dispatch({
//         type: actionTypes.GET_ORDER,
//         payload: id
//     })
// }

