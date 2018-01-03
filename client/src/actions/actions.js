import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSuccess = (authdata) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        authdata
    };
};

export const authFailed = (err) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        err
    };
};

export const addClass = (cls) => {
    return {
        type: actionTypes.ADD_CLASS,
        cls
    };
};

export const editClass = (cls) => {
    return {
        type: actionTypes.EDIT_CLASS,
        cls
    };
};

export const getClass = (id) => {
    return {
        type: actionTypes.GET_CLASS,
        id
    };
};

export const addCredits = (id) => {
    return {
        type: actionTypes.ADD_CREDITS,
        id
    };
};

export const auth = (email, password) => {
    return dispatch => {
        let url = "http://localhost:3001/auth/signin";
        const data = {
            email,
            password
        }
        axios.post(url, data).then((res) => {
            console.log(res);
            dispatch(authSuccess(res.data));
        }, (err) => {
            console.log(err);
            dispatch(authFailed(err));
        })
    }
}