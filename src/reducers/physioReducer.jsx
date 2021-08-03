import {
  ADD_PHYSIO_DATA,
  DELETE_PHYSIO_DATA,
  GET_PHYSIO_DATA,
  GET_PHYSIO_DATA_BY_ID,
  EDIT_PHYSIO_DATA,
} from "../actions/types";

export const physioData = (state = [], action) => {
  switch (action.type) {
    case ADD_PHYSIO_DATA:
      const physioData = state.map((physio) => physio);
      physioData.push(action.payload);
      return physioData;
    case DELETE_PHYSIO_DATA:
      return state.filter((physio) => {
        if (physio._id === action.payload._id) return false;
        else return true;
      });
    case EDIT_PHYSIO_DATA:
      return state.map((physio) => {
        if (physio._id === action.payload._id) return action.payload;
        return physio;
      });
    case GET_PHYSIO_DATA:
      return [...action.payload];


    case GET_PHYSIO_DATA_BY_ID:
      const physioDataOne = state.map((pr) => {
        return pr;
      });
      physioDataOne.push(action.payload);
      return physioDataOne;
    default:
      return state;
  }
};
