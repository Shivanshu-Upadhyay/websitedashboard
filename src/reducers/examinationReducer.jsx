import { ADD_EXAMINATION_DATA, DELETE_EXAMINATION_DATA, GET_EXAMINATION_DATA, GET_EXAMINATION_DATA_BY_ID, EDIT_EXAMINATION_DATA } from "../actions/types";

export const examinationData = (state = [], action) => {
    switch (action.type) {
        case ADD_EXAMINATION_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_EXAMINATION_DATA:
            return [...action.payload];

        case EDIT_EXAMINATION_DATA:
            return state.map((data) => {
                console.log(data);
                if (data._id === action.payload._id) return action.payload;
                return data;
            });

        case DELETE_EXAMINATION_DATA:
            return state.filter((consent) => {
                console.log(action.payload._id);
                if (consent._id === action.payload._id) return false;
                else return true;
            });

        default:
            return state;
    }


};




export const selectedExamination = (state = {}, action) => {
    switch (action.type) {
        case GET_EXAMINATION_DATA_BY_ID:
            return { ...action.payload };

        default:
            return state;
    }
};