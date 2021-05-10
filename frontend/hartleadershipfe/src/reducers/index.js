import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import competencyReducer from './competencyReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    competency: competencyReducer
})

export default (state, action) =>
    rootReducer(action.type === 'LOGOUT' ? undefined : state, action)