import { ADD_PAIN_DATA, DELETE_PAIN_DATA, GET_PAIN_DATA, GET_PAIN_DATA_BY_ID, EDIT_PAIN_DATA } from "../actions/types";

export const painData = (state = [], action) => {
    switch (action.type) {
        case ADD_PAIN_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_PAIN_DATA:
            return [...action.payload];

        case EDIT_PAIN_DATA:
            return state.map((data) => {
                console.log(data);
                if (data._id === action.payload._id) return action.payload;
                return data;
            });

        case DELETE_PAIN_DATA:
            return state.filter((consent) => {
                console.log(action.payload._id);
                if (consent._id === action.payload._id) return false;
                else return true;
            });

        default:
            return state;
    }


};




export const selectedPain = (state = {}, action) => {
    switch (action.type) {
        case GET_PAIN_DATA_BY_ID:
            return { ...action.payload };

        default:
            return state;
    }
};