import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

const initialState = {
    isLoading: false,
    isError: false,
    isErrorMessage: false,
    isAuth: false,
    token: ""
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN_REQUEST: 
            return {...state, isLoading: true}
        case LOGIN_FAILURE: 
            return {...state, isLoading: false, isError: true, isErrorMessage: payload}
        case LOGIN_SUCCESS: 
            return {...state, isLoading: false, isAuth: true, token: payload}
        default: 
            return state;
    }
}