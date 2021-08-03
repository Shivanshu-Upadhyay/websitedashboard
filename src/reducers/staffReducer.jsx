import {
  ADD_STAFF_DATA,
  DELETE_STAFF_DATA,
  GET_STAFF_DATA,
  // GET_STAFF_DATA_BY_ID,
  EDIT_STAFF_DATA
} from "../actions/types";

export const staffData = (state = [], action) => {
  switch (action.type) {
    case ADD_STAFF_DATA:
      const staffData = state.map((staff) => staff);
      staffData.push(action.payload);
      return staffData;
    case DELETE_STAFF_DATA:
      return state.filter((staff) => {
        if (staff._id === action.payload._id) return false;
        else return true;
      });

    case EDIT_STAFF_DATA:
      return state.map((staff) => {
        if (staff._id === action.payload._id) return action.payload;
        return staff;
      });
    case GET_STAFF_DATA:
      return [...action.payload];

    default:
      return state;
  }
};
