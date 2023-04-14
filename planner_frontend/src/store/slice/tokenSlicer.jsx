import { createSlice} from '@reduxjs/toolkit';
import {getUserAPI, getProfileAPI, logoutAPI} from './../services/authentication';


export const getUserSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMsg:null,
        data: null,
        token: null
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUserAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUserAPI.rejected, (state, action) => {
            state.isError = true;
        });

        builder.addCase(getProfileAPI.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(getProfileAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getProfileAPI.rejected, (state, action) => {
            state.isError = true;
        });

        builder.addCase(logoutAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.errorMsg = null;
            state.data = null;
            state.token = null;
        });
        builder.addCase(logoutAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(logoutAPI.rejected, (state, action) => {
            state.isError = true;
        });
    }
})

export default getUserSlice;
