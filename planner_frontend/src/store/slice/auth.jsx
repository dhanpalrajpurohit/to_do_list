import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loginAPI = createAsyncThunk("loginAPI", async() => {
    const response = await fetch();
    return response.json();
});

const authSlice = createSlice({
    name: "auth",
    initialState : {
        isLoading : false,
        data: null,
    },
    extraReducers : (builder) => {
        builder.addCase(loginAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(loginAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginAPI.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    } 
});

export default authSlice.reducer;