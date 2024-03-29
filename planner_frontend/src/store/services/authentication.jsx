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

export const signupAPI = async (data) => {
    const response = await axiosInstance({
        url: "signup/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    });
    return response;
};

export const getUserAPI = createAsyncThunk("getUserAPI", async (data, thunkAPI) => {
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
    const res = await response.data;
    return res;
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
    const res = await response.data;
    return res;
});

export const logoutAPI = () => {
    axiosInstance({
        url: "logout/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: {"token": localStorage.getItem('token')},
    })
}