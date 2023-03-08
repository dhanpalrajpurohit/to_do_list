import { createSlice} from '@reduxjs/toolkit';
import {getTokeAPI, getUserAPI} from './../services/authentication'


// export const tokenSlice = createSlice({
//     name: "tokenslice",
//     initialState: {
//         isLoading: false,
//         token: null,
//         isError: false,
//         isSuccess: false
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getTokeAPI.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isSuccess = true;
//             state.token = action.payload.token;
//         });
//         builder.addCase(getTokeAPI.pending, (state, action) => {
//             state.isLoading = true;
//         });
//         builder.addCase(getTokeAPI.rejected, (state, action) => {
//             state.isError = true;
//         });
//     }
// });

export const getUserSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMsg:null,
        data: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAPI.fulfilled, (state, action) => {
            console.log(action, action.payload)
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
    }
})

export default getUserSlice;
