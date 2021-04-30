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
        
/*
export const getSurvey = () =>{
    axios
    .get('/Survey_questions')
    .then(res => {
        connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT question_text FROM Survey_questions WHERE survey_id = 0001', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
              // Getting the 'response' from the database and sending it to our route. This is were the data is.
              return(results);
            });
          });
        });
};

export const surveyResult = result =>{
    axios
    .post('/student', (req,res))
    .then(res => {
        connection.getConnection(function (err, connection) {

            // Executing the MySQL query (select all data from the 'users' table).
            connection.query('UPDATE student SET survey_result = ' + result + ' WHERE smu_id = 47351594' , function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;
            
                  // Getting the 'response' from the database and sending it to our route. This is were the data is.
                  return(results);
                });
              });
            });
};
*/

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
