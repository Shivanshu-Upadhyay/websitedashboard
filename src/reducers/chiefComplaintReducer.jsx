import { ADD_CHIEF_COMPLAINT_DATA, DELETE_CHIEF_COMPLAINT_DATA, GET_CHIEF_COMPLAINT_DATA, GET_CHIEF_COMPLAINT_DATA_BY_ID, EDIT_CHIEF_COMPLAINT_DATA } from "../actions/types";

export const complaintData = (state = [], action) => {
    switch (action.type) {
        case ADD_CHIEF_COMPLAINT_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_CHIEF_COMPLAINT_DATA:
            return [...action.payload];

        case EDIT_CHIEF_COMPLAINT_DATA:
            return state.map((data) => {
                console.log(data);
                if (data._id === action.payload._id) return action.payload;
                return data;
            });

        case DELETE_CHIEF_COMPLAINT_DATA:
            return state.filter((consent) => {
                console.log(action.payload._id);
                if (consent._id === action.payload._id) return false;
                else return true;
            });

        default:
            return state;
    }


};




export const selectedComplaint = (state = {}, action) => {
    switch (action.type) {
        case GET_CHIEF_COMPLAINT_DATA_BY_ID:
            return { ...action.payload };

        default:
            return state;
    }
};