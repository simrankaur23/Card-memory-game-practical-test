import {
    FETCH_ALLDATA_REQUEST,
    FETCH_ALLDATA_SUCCESS,
    FETCH_ALLDATA_FAILURE,
    } from "../Types/getall";

    import axios from "axios";
    
    export const getAllDataRequest = () => ({
    type: FETCH_ALL_DATA_REQUEST,
    });
    
    export const getAllDataSuccess = (data) => ({
    type: FETCH_ALL_DATA_SUCCESS,
    data,
    });
    
    export const getAllDataFailure = (error) => ({
    type: FETCH_ALL_DATA_FAILURE,
    error,
    });
    
    export const getAllDataList = () => (dispatch) => {
   
    
    dispatch(getAllDataRequest());

    let url =''
    
    return axios
        .get(url )
        .then((data) => {
        dispatch(getAllDataSuccess(data));
        })
        .catch((error) => {
        dispatch(getAllDataFailure(error));
        });
    };
    