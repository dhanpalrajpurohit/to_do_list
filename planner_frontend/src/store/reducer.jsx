import { configureStore, getDefaultMiddleware ,  } from '@reduxjs/toolkit';
import {tokenSlice, getuserSlice} from "./slice/tokenSlicer";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    tokenslice: tokenSlice.reducer,
    getUserSlice: getuserSlice.reducer
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware]
});
