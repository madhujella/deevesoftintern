import * as actionTypes from '../actions/actionTypes';

var initialState = {
    email: '', 
    userType: '',
    token: '',
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                email: action.email,
                userType: action.userType
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;

    }
}

export default reducer;