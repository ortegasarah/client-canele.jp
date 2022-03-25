import * as actionTypes from '../constants/orderConst'

const initialStateOrder = {
    loading: false,
    order: [],
    error: undefined,
}

export const createOrderReducer = (state = initialStateOrder, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
            case actionTypes.CREATE_ORDER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                        success: true
                }
                case actionTypes.CREATE_ORDER_FAIL:
                    return {
                        ...state,
                        loading: false,
                            error: action.payload,
                    };

                case actionTypes.GET_ORDER_REQUEST:
                    return {
                        ...state,
                        loading: true,
                    }
                    case actionTypes.GET_ORDER_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                                order: action.payload.order,
                        };
                    case actionTypes.GET_ORDER_FAIL:
                        return {
                            ...state,
                            loading: false,
                        };
                    default:
                        return state;
    }
}