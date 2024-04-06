import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state = action.payload;
    }
  },
});

export const {
    setAuth,
} = authSlice.actions;