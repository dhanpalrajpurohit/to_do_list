import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

export const getTokenAPI = async(data) => {
    const response =  await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    });
    return response;
}
    
export const getUserAPI = createAsyncThunk("getUser", async(data, thunkAPI) => {
    const token_response =  await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    });
    console.log({token_response});
    if(token_response.status === 200){
        localStorage.setItem('token', token_response.data.token);
        const response = axiosInstance({
            url: "signin/",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            data: data,
        });
        if (response.status === 200) {
            return response.data;
        } else {
            return thunkAPI.rejectWithValue(response.data)
        }
    }
    else {
        return thunkAPI.rejectWithValue(token_response.data)
    }
});