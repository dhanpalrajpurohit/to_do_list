import { createSlice } from '@reduxjs/toolkit';
import { getTasksAPI, postTaskAPI, getSingleTaskAPI, updateSingleTaskAPI, deleteSingleTaskAPI } from '../services/task';


const taskSlice = createSlice({
    name: "task",
    initialState: {
        data: null,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(getTasksAPI.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getTasksAPI.pending, (state, action) => {
            state.error = null;
        });
        builder.addCase(getTasksAPI.rejected, (state, action) => {
            state.data = null;
            state.error = action.payload;
        });


        // builder.addCase(postTaskAPI.fulfilled, (state, action) => {
        //     state.data = action.payload;
        // });
        // builder.addCase(postTaskAPI.pending, (state, action) => {
        //     state.isLoading = true;
        //     state.data = null
        // });
        // builder.addCase(postTaskAPI.rejected, (state, action) => {
        //     state.isError = true;
        //     state.data = null;
        // });


        builder.addCase(updateSingleTaskAPI.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(updateSingleTaskAPI.pending, (state, action) => {
            state.error = true;
        });
        builder.addCase(updateSingleTaskAPI.rejected, (state, action) => {
            state.error = action.payload;;
        });

    }
})

export default taskSlice;