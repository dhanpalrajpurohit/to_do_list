import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

export const loginAPI = createAsyncThunk("loginAPI", async (data, thunkAPI) => {
    const response = await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    });
    
    if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        return response.data
    } else {
        return thunkAPI.rejectWithValue(response.data)
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: null,
        email: null,
        name: null,
        isLoading: false,
        data: null,
        isError: false,
        isSuccess: false
    },
    extraReducers: (builder) => {
        builder.addCase(loginAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(loginAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginAPI.rejected, (state, action) => {
            state.isError = true;
        });
    }
});

export const userSelector = state => state.auth
