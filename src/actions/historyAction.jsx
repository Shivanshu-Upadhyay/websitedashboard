import physiomaticApi from "../api/physiomaticApi";

import { ADD_HISTORY_DATA, ERROR, GET_HISTORY_DATA, GET_HISTORY_DATA_BY_ID, DELETE_HISTORY_DATA, EDIT_HISTORY_DATA } from "./types";

export const addHistoryData = (historyData) => async (dispatch) => {
    try {
        const response = await physiomaticApi.post(
            "/api/history/add",
            historyData
        );
        dispatch({
            type: ADD_HISTORY_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};

export const getHistoryDataById = (dataId) => async (dispatch) => {
    console.log('in id')
    try {
        const response = await physiomaticApi.get(
            `/api/history/${dataId}`
        );
        dispatch({
            type: GET_HISTORY_DATA_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const getHistoryData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/history/${id}`
        );
        dispatch({
            type: GET_HISTORY_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const deleteHistoryData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.delete(
            `/api/history/${id}`
        );
        console.log(response);
        dispatch({
            type: DELETE_HISTORY_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const editHistoryData = (data, id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.put(
            `/api/history/${id}`,
            data
        );
        console.log(response);
        dispatch({
            type: EDIT_HISTORY_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};
