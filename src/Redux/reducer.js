import {ADD_ONE,MINUS_ONE} from './actions'

const initalState = {

}

function reducer(state = initalState, action){
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case MINUS_ONE:
            return {
                ...state,
                counter: state.counter -1
            }
        default:
            return state;
    }
}

export default reducer