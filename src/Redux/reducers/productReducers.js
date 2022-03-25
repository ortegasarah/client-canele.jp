import * as actionTypes from '../constants/productConst';

const initialStateProduct = {
    loading: false,
    products: [],
    error: undefined,
}

export const getProductReducer = (state = initialStateProduct, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                products: [],
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
export const initialStateProductDetail = {
    loading: false,
    product: {},
    error: undefined,
}

export const getProductDetailsReducer = (state = initialStateProductDetail, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                ...state,
                product: {},
            }
        default: 
        return state;
    }
}