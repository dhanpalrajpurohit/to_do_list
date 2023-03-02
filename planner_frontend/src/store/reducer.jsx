import { configureStore, getDefaultMiddleware ,  } from '@reduxjs/toolkit';
import {authSlice} from "./slice/auth";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware]
});
