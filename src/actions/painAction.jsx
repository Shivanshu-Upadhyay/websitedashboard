import physiomaticApi from "../api/physiomaticApi";

import { ADD_PAIN_DATA, ERROR, GET_PAIN_DATA, GET_PAIN_DATA_BY_ID, DELETE_PAIN_DATA, EDIT_PAIN_DATA } from "./types";

export const addPainData = (painData) => async (dispatch) => {
    try {
        const response = await physiomaticApi.post(
            "/api/pain/add",
            painData
        );
        dispatch({
            type: ADD_PAIN_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};

export const getPainDataById = (dataId) => async (dispatch) => {
    console.log('in id')
    try {
        const response = await physiomaticApi.get(
            `/api/pain/${dataId}`
        );
        dispatch({
            type: GET_PAIN_DATA_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const getPainData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/pain/${id}`
        );
        dispatch({
            type: GET_PAIN_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const deletePainData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.delete(
            `/api/pain/${id}`
        );
        console.log(response);
        dispatch({
            type: DELETE_PAIN_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const editPainData = (data, id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.put(
            `/api/pain/${id}`,
            data
        );
        console.log(response);
        dispatch({
            type: EDIT_PAIN_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};
