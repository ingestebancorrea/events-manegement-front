import { createSlice } from '@reduxjs/toolkit'
import { EventState } from '../../interfaces/interfaces';

const initialState:EventState = {
  events: [
    {
      id: '',
      name: '',
      description: '',
      date: ''
    }
  ],
  event: {
    id: '',
    name: '',
    description: '',
    date: ''
  }
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.events = action.payload;
    },
    setEventDetails: (state, action) => {
      state.event = action.payload;
    },
  },
});

export const {
  setEvent,
  setEventDetails
} = eventSlice.actions;