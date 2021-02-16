import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
};

export const checkAuthTimout = (expiratinTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiratinTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        };

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArwjaHjD49s6V3eD1ZnjqyLcleb6BZjZQ";

        if (!isSignup) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArwjaHjD49s6V3eD1ZnjqyLcleb6BZjZQ";
        }

        axios
        .post(url, authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimout(response.data.expiresIn))
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error.response.data.error));
        });
        
    };
};
