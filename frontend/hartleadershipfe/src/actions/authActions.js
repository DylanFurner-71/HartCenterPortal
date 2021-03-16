import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';
import {HartAPIPrefix } from "../prefixes/hart";
// Register User
axios.defaults.baseURL = HartAPIPrefix;
// Change Password
// export const changePassword = (userData, history) => dispatch => {
//     axios
//         .post('/student/changePassword', userData)
//         .then(() => history.push('/home')) // re-direct to home after changing password
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data,
//             })
//         );
// };
export const login = userData => dispatch => {
        axios
            .post('/login/', userData)
            .then(res => {
                // if (localStorage.getItem('user', token)){
                //     console.log("What does thi smean?");
                // }
                // Save to localStorage
                // Set token to localStorage
                 console.log(res.data);
                if (res.data.accessToken){
                    const token=res.data.accessToken;
                localStorage.setItem('accessToken', res.data.accessToken);

                // Set token to Auth header
                setAuthToken(token);
                // Decode token to get user data
                const decoded = jwt_decode(token);
                console.log("decoded", decoded);
                // Set current user
                dispatch(setCurrentUser(res.data.user));
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err,
                });
            });
};
// Set logged in user
export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};
// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
