import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

export const getTokenAPI = createAsyncThunk("getTokenAPI", async (data, thunkAPI) => {
    const response = await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    });
    const res_data = await response.data;
    return res_data;
});

export const getUserAPI = createAsyncThunk("getUser", async (data, thunkAPI) => {
    const response = await axiosInstance({
        url: "signin/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    const res_data = await response.data;
    return res_data; 
});

export const getProfileAPI = createAsyncThunk("getProfileUser", async (thunkAPI) => {
    const response = await axiosInstance({
        url: "get-profile/",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
    });
    return await response.data;
});

export const updateUserProfileAPI = createAsyncThunk("userProfileUser", async (data, thunkAPI) => {
    const response = await axiosInstance({
        url: "get-profile/",
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    
    return await response.data;
});

export const logoutAPI = createAsyncThunk("logout", async(thunkAPI) => {
    const response = await axiosInstance({
        url: "logout/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: {"token": localStorage.getItem('token')},
    }).then((response)=>{
        if(response.status==200){
            return response.data;
        }
    }).
    
});