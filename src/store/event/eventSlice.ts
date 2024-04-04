import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const eventSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1
    }
  },
});

export const {
    increment,
    decrement
} = eventSlice.actions;