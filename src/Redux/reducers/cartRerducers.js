import * as actionTypes from '../constants/cartConst';

const initialState = {
    loading: false,
    items: {},
    error: undefined,
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            let product = state.items[item.product._id];

            if (product) {
                product.quantity = item.quantity ? (product.quantity + item.quantity) : (product.quantity + 1)
            } else {
                product = {
                    info: action.payload.product,
                    quantity: item.quantity ? item.quantity : 1,
                }
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.info._id]: product
                }
            }
            case actionTypes.REMOVE_FROM_CART:
                const items = state.items
                delete items[action.payload]
                return {
                    ...state,
                    items
                };
            case actionTypes.ADJUST_QTY:
                return {

                }

                default:
                    return state;
    }
}