import { ADD_HISTORY_DATA, DELETE_HISTORY_DATA, GET_HISTORY_DATA, GET_HISTORY_DATA_BY_ID, EDIT_HISTORY_DATA } from "../actions/types";

export const historyData = (state = [], action) => {
    switch (action.type) {
        case ADD_HISTORY_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_HISTORY_DATA:
            return [...action.payload];

        case EDIT_HISTORY_DATA:
            return state.map((data) => {
                console.log(data);
                if (data._id === action.payload._id) return action.payload;
                return data;
            });

        case DELETE_HISTORY_DATA:
            return state.filter((history) => {
                console.log(action.payload._id);
                if (history._id === action.payload._id) return false;
                else return true;
            });

        default:
            return state;
    }


};




export const selectedComplaint = (state = {}, action) => {
    switch (action.type) {
        case GET_HISTORY_DATA_BY_ID:
            return { ...action.payload };

        default:
            return state;
    }
};