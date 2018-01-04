import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSuccess = ( name, token, userType, email ) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        name,
        token,
        userType,
        email
    };
};

export const authFailed = (err) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        err
    };
};

export const authLogout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const authSignIn = (email, password) => {
    return dispatch => {
        const url = "http://localhost:3001/auth/signin";
        const data = { email, password }
        axios.post(url, data).then((res) => {
            localStorage.setItem('auth', JSON.stringify({ token: res.data.token, email: res.data.user, userType: res.data.type, name: res.data.name }))            
            dispatch(authSuccess(res.data.name, res.data.token, res.data.type, res.data.user));
        }, (err) => {
            dispatch(authFailed(err));
        })
    }
}

export const authSignUp = (name, email, password, userType) => {
    return dispatch => {
        const url = "http://localhost:3001/auth/signup";
        const data = { name, email, password, userType }
        axios.post(url, data).then((res) => {
            localStorage.setItem('auth', JSON.stringify({ token: res.data.token, email: res.data.user, userType: res.data.type, name: res.data.name }))
            dispatch(authSuccess(res.data.name, res.data.token, res.data.type, res.data.user));
        }, (err) => {
            dispatch(authFailed(err));
        })
    }
}

export const logout = () => {
    localStorage.removeItem("auth");
    return dispatch => {
        dispatch(logout())
    }
}

export const checkAuth = () => {
    return dispatch => {
        var userData = localStorage.getItem("auth");
        if(!userData) {
            dispatch(authLogout())
        }else {
            dispatch(authSuccess(userData.name, userData.token, userData.userType, userData.email))
        }

    }
}