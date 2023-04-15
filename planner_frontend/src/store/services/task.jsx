import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

// export const getTasksAPI = async(data) => {
//     const response =  await axiosInstance({
//         url: `tasks/${data.email}/`,
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${localStorage.getItem('token')}`
//         },
//         data: data,
//     });
//     return await response.data;
// }


export const getTasksAPI = createAsyncThunk("getTasksAPI", async (data, thunkAPI) => {
    const response =  await axiosInstance({
        url: `tasks/${data.email}/`,
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    const res = await response.data; 
    return res;
});

export const postTaskAPI = async(data) => {
    const response =  await axiosInstance({
        url: `tasks/${data.email}/`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    return await response.data;
}


export const getSingleTaskAPI = async(data) => {
    const response =  await axiosInstance({
        url: `tasks/${data.email}/${data.task_id}`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    const res_data = await response.json();
    return res_data;
}

export const  updateSingleTaskAPI = createAsyncThunk("updateSingleTaskAPI", async (data, thunkAPI) => {
    const response =  await axiosInstance({
        url: `tasks/${data.email}/${data.id}/`,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    const res_data = await response.json();
    return res_data;
});


export const deleteSingleTaskAPI = async(data) => {
    const response =  await axiosInstance({
        url: `tasks/${data.email}/${data.task_id}`,
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        data: data,
    });
    const res_data = await response.json();
    return res_data;
}

