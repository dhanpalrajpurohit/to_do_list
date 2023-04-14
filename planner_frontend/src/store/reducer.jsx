import { configureStore, getDefaultMiddleware ,  } from '@reduxjs/toolkit';
import {tokenSlice, getUserSlice} from "./slice/tokenSlicer";
import taskSlice from "./slice/todoSlicer";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    // tokenslice: tokenSlice.reducer,
    user: getUserSlice.reducer,
    task: taskSlice.reducer
  },
  // middleware: [...getDefaultMiddleware(), thunkMiddleware]
});
