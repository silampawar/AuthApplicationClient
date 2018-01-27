import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = "https://authapplication.herokuapp.com";

export function signUpUser({ email, password }) {
    const ROOT_URL = "https://authapplication.herokuapp.com";
    return function (dispatch) {

        //submit email and password to API
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {

               dispatch({ type: 'AUTH_USER' });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');

            }).catch(() => {
                dispatch(authError('The username is already taken!'));
            });
    }

}


export function signInUser({ email, password }) {
 
    return function (dispatch) {

        //submit email and password to API
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: 'AUTH_USER' });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');

            }).catch(() => {
                dispatch(authError('Wrong username or password'));
            });
    }

}
export function authError(err) {
    return {
        type: 'AUTH_ERR',
        payload: err
    }
}

//To Signout

export function SignOut() {
    localStorage.removeItem('token');
    return function (dispatch) {

        dispatch({ type: 'UNAUTH_USER' });
    }
}

export function FetchMessage() {
   
    return function (dispatch) {

        axios.get(`${ROOT_URL}/feature`,{
            headers: {authorization: localStorage.getItem('token')}
        })
        .then(response => {
        }).catch(() => {
            dispatch(authError('Wrong username or password'));
        });
    }
}

export function clearError() {
   
    return function (dispatch) {

        dispatch({ type: 'CLEAR_ERR' });
    
    }
}