import physiomaticApi from "../api/physiomaticApi";

import { ADD_CHIEF_COMPLAINT_DATA, ERROR, GET_CHIEF_COMPLAINT_DATA, GET_CHIEF_COMPLAINT_DATA_BY_ID, DELETE_CHIEF_COMPLAINT_DATA, EDIT_CHIEF_COMPLAINT_DATA } from "./types";

export const addComplaintData = (complaintData) => async (dispatch) => {
    try {
        const response = await physiomaticApi.post(
            "/api/chiefComplaint/add",
            complaintData
        );
        dispatch({
            type: ADD_CHIEF_COMPLAINT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};

export const getComplaintDataById = (dataId) => async (dispatch) => {
    console.log('in id')
    try {
        const response = await physiomaticApi.get(
            `/api/chiefComplaint/${dataId}`
        );
        dispatch({
            type: GET_CHIEF_COMPLAINT_DATA_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const getComplaintData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/chiefComplaint/${id}`
        );
        dispatch({
            type: GET_CHIEF_COMPLAINT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const deleteComplaintData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.delete(
            `/api/chiefComplaint/${id}`
        );
        console.log(response);
        dispatch({
            type: DELETE_CHIEF_COMPLAINT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const editComplaintData = (data, id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.put(
            `/api/chiefComplaint/${id}`,
            data
        );
        console.log(response);
        dispatch({
            type: EDIT_CHIEF_COMPLAINT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};
