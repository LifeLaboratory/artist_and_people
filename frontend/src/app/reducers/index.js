import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import * as ActionTypes from "../constants/ActionTypes";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth,
    login
})


const auth = (state = {}, action) => {
    return {
        ...state,
        authenticated: false,
    }
};

const login = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.TRY_LOGIN:
            return {
                pending: true
            }
        default:
            return {
                pending: false
            }
    }
};

export default createRootReducer
