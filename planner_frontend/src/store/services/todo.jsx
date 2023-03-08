import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

export const getTokenAPI = async(data) => {
    const response =  await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    });
    return response;
}