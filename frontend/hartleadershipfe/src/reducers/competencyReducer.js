import {
    SET_CURRENT_COMPETENCY
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    competency: {},
    loading: false,
};
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_COMPETENCY:
            return {
                ...state,
                competency: action.payload
            };
        default:
            return state;
    }
}