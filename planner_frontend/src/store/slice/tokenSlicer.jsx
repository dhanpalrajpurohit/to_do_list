import { createSlice} from '@reduxjs/toolkit';
import {getTokenAPI, getUserAPI, getProfileAPI, updateUserProfileAPI} from './../services/authentication';


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


        builder.addCase(getTokenAPI.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(getTokenAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getTokenAPI.rejected, (state, action) => {
            state.isError = true;
        });


        builder.addCase(getProfileAPI.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(getProfileAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getProfileAPI.rejected, (state, action) => {
            state.isError = true;
        });


        builder.addCase(updateUserProfileAPI.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(updateUserProfileAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateUserProfileAPI.rejected, (state, action) => {
            state.isError = true;
        });


    }
})

export default getUserSlice;
