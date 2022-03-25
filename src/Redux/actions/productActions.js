import * as actionTypes from '../constants/productConst'
import {
    createProductWs,
    getProductWs,
    idProductWs
} from '../../services/product-ws'

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCTS_REQUEST
        });

        const {
            data,
            status,
            errorMessage
        } = await getProductWs()
        if (status) {
            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data.result
            })
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
                payload: errorMessage
            })
        }


    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        });

        const {
            data,
            status,
            errorMessage
        } = await idProductWs(id)
        if (status) {
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
                payload: data.result
            })
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
                payload: errorMessage
            })
        }


    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error
        })
    }
}

// export const removeProductDetails = () => async (dispatch) => {
//     try {
//         dispatch({
//             type: actionTypes.GET_PRODUCT_DETAILS_RESET
//         })
//         const {
//             data,
//             status,
//             errorMessage
//         } = await getProductWs()
//         if (status) {
//             dispatch({
//                 type: actionTypes.GET_PRODUCT_DETAILS_RESET,
//                 payload: data.result
//             })
//         } else {
//             dispatch({
//                 type: actionTypes.GET_PRODUCTS_FAIL,
//                 payload: errorMessage
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type: actionTypes.GET_PRODUCTS_FAIL,
//             payload: error
//         })
//     }


// }