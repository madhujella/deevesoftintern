import * as actionTypes from '../actions/actionTypes';

var initialState = {
    email: '', 
    name: '',
    userType: '',
    token: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                name: action.name,
                token: action.token,
                email: action.email,
                userType: action.userType
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                error: action.error,
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                name: '',
                token: null,
                email: '',
                userType: ''
            }
        default:
            return state;

    }
}

export default reducer;