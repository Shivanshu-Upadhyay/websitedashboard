import { ADD_MOTOR_DATA, GET_MOTOR_DATA, GET_MOTOR_DATA_BY_ID, EDIT_MOTOR_DATA, DELETE_MOTOR_DATA } from "../actions/types";

export const motorData = (state = [], action) => {
    switch (action.type) {
        case ADD_MOTOR_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_MOTOR_DATA:
            return [...action.payload];

        case EDIT_MOTOR_DATA:
            return state.map((data) => {
                console.log(data);
                if (data._id === action.payload._id) return action.payload;
                return data;
            });

        case DELETE_MOTOR_DATA:
            return state.filter((motor) => {
                console.log(action.payload._id);
                if (motor._id === action.payload._id) return false;
                else return true;
            });
        default:
            return state;
    }


};




export const selectedMotor = (state = {}, action) => {
    switch (action.type) {
        case GET_MOTOR_DATA_BY_ID:
            return { ...action.payload };

        default:
            return state;
    }
};