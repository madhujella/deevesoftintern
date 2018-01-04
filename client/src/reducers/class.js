import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cls: {}
}

const reducer = (state = initialState, action){
    switch(action.type) {
        case actionTypes.ADD_CLASS:
            return {
                ...state,
                cls
            }
    }
}

export default reducer;