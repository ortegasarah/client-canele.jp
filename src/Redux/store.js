import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import  reducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({ })

// Array with all middleware
const middleware = [ thunk ]

const store = createStore(reducer, compose(applyMiddleware( thunk )));

export default store;