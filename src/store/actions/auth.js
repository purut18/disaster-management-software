import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('./php/login.php', {
            email: email,
            pass: password
        }).then(response => {
            if(typeof response.data === 'string' && response.data.trim() === 'authfail') {
                dispatch(authFail("Username and Password Didn't Match"));
            } else {
                const exprDate = new Date(new Date().getTime() + 3600000);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('exprDate', exprDate);
                dispatch(authSuccess(response.data.token));
            }
        }).catch(err => {
            dispatch(authFail("There was an error, please try again later."));
        });
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('exprDate');
    
    return {
        type: actionTypes.LOGOUT
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
             dispatch(logout());
        } else {
            const expirationTime = new Date(localStorage.getItem('exprDate'));
            if(expirationTime > new Date()) {
                dispatch(authSuccess(token));
            } else {
                dispatch(logout());
            }
        }
    };
};