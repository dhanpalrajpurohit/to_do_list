import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

export const getTokenAPI = async (data) => {
    const response = await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    });
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        return response;
    }
}

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
    if (response.status === 200) {
        return await response.data;
    } else {
        return thunkAPI.rejectWithValue(response.data)
    }
});

export const getProfileAPI = createAsyncThunk("getProfileUser", async (data, thunkAPI) => {
    const response = await axiosInstance({
        url: "get-profile/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    if (response.status === 200) {
        return await response.data;
    } else {
        return thunkAPI.rejectWithValue(response.data)
    }
});