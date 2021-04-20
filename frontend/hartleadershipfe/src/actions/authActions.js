import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, SET_CURRENT_COMPETENCY } from './types';
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

/*
        /*
import axios from "axios";
const setAuthToken = token => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};
export default setAuthToken;
*/
export const setCurrentCompetency = competency => {
    return {
        type: SET_CURRENT_COMPETENCY,
        payload: competency,
    };
};
export const competencies = data => dispatch => {

}

export const login = userData => dispatch => {
        axios
        .post('/login/', userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
             console.log(res.data);
             console.log("response::::", res, "a;lsdkj");
            if (res.data.accessToken){
            // localStorage.setItem('user', res.data);
            localStorage.setItem('accessToken', res.data.accessToken);
            // Set token to Auth header
            // setAuthToken(token);
            const decoded = jwt_decode(res.data.accessToken);
                    // Set current user
            setAuthToken(res.data.accessToken);
            // Decode token to get user data
            
            // Set current user
            console.log(decoded);
            dispatch(setCurrentUser(decoded));
            }

        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err,
            });
        })
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
    localStorage.removeItem('accessToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
