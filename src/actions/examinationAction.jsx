import physiomaticApi from "../api/physiomaticApi";

import { ADD_EXAMINATION_DATA, ERROR, GET_EXAMINATION_DATA, GET_EXAMINATION_DATA_BY_ID, DELETE_EXAMINATION_DATA, EDIT_EXAMINATION_DATA } from "./types";

export const addExaminationData = (examinationData) => async (dispatch) => {
    try {
        const response = await physiomaticApi.post(
            "/api/examination/add",
            examinationData
        );
        dispatch({
            type: ADD_EXAMINATION_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};

export const getExaminationDataById = (dataId) => async (dispatch) => {
    console.log('in id')
    try {
        const response = await physiomaticApi.get(
            `/api/examination/${dataId}`
        );
        dispatch({
            type: GET_EXAMINATION_DATA_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const getExaminationData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/examination/${id}`
        );
        dispatch({
            type: GET_EXAMINATION_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const deleteExaminationData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.delete(
            `/api/examination/${id}`
        );
        console.log(response);
        dispatch({
            type: DELETE_EXAMINATION_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const editExaminationData = (data, id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.put(
            `/api/examination/${id}`,
            data
        );
        console.log(response);
        dispatch({
            type: EDIT_EXAMINATION_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};
