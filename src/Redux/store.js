import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
// import  reducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { cartReducers } from './reducers/cartRerducers';
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({ 
    cart: cartReducers,
    getProduct: getProductReducer,
    getProductDetails: getProductDetailsReducer,
})

// Array with all middleware
// const middleware = [ thunk ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;