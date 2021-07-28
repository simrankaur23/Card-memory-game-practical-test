import {
    FETCH_ALLDATA_REQUEST,
    FETCH_ALLDATA_SUCCESS,
    FETCH_ALLDATA_FAILURE,
    } from "../Types/getall";
    
    const initialState = {
    data: null,
    error: null,
    isLoading: false,
    };
    
    const GetAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALLDATA_REQUEST:
        return {
            ...state,
            isLoading: true,
        };
        case FETCH_ALLDATA_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data.data,
            error: null,
        };
        case FETCH_ALLDATA_FAILURE:
        return {
            ...state,
            isLoading: false,
            data: null,
            error: action.error.response,
        };
        default:
        return state;
    }
    };
    
    export default GetAllReducer;
    