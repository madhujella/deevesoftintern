import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export const cls = (cls) => {
    return (dispatch) => {
        let url = "http://localhost:3001/class/create";
        axios.get(url).then((res) => {
            
        })
    }
}