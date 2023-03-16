import { configureStore, getDefaultMiddleware ,  } from '@reduxjs/toolkit';
import {tokenSlice, getUserSlice} from "./slice/tokenSlicer";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    // tokenslice: tokenSlice.reducer,
    user: getUserSlice.reducer
  },
  // middleware: [...getDefaultMiddleware(), thunkMiddleware]
});
