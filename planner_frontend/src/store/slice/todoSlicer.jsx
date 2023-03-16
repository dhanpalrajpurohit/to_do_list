import { createSlice} from '@reduxjs/toolkit';
import {getTasksAPI, postTaskAPI, getSingleTaskAPI, updateSingleTaskAPI, deleteSingleTaskAPI} from '../services/task';


export const taskSlice = createSlice({
    name: "task",
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMsg:null,
        data: null,
    },

    extraReducers: (builder) => {
        builder.addCase(getTasksAPI.fulfilled, (state, action) => {
            console.log(action, action.payload)
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTasksAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getTasksAPI.rejected, (state, action) => {
            state.isError = true;
        });


        builder.addCase(postTaskAPI.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(postTaskAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(postTaskAPI.rejected, (state, action) => {
            state.isError = true;
        });


        builder.addCase(getSingleTaskAPI.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(getSingleTaskAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getSingleTaskAPI.rejected, (state, action) => {
            state.isError = true;
        });

    }
})