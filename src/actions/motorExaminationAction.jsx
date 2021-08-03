import physiomaticApi from "../api/physiomaticApi";

import { ADD_MOTOR_DATA, ERROR, GET_MOTOR_DATA, GET_MOTOR_DATA_BY_ID, DELETE_MOTOR_DATA, EDIT_MOTOR_DATA } from "./types";

export const addMotorData = (motorData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/motor/add",
      motorData
    );
    dispatch({
      type: ADD_MOTOR_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getMotorDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/motor/${dataId}`
    );
    dispatch({
      type: GET_MOTOR_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getMotorData = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/motor/${id}`
    );
    dispatch({
      type: GET_MOTOR_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};



export const deleteMotorData = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(
      `/api/motor/${id}`
    );
    console.log(response);
    dispatch({
      type: DELETE_MOTOR_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const editMotorData = (data, id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.put(
      `/api/motor/${id}`,
      data
    );
    console.log(response);
    dispatch({
      type: EDIT_MOTOR_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
