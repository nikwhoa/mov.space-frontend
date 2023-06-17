/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  trainers: [],
  loadingTrainers: 'idle',
};

export const trainersSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    getTrainers: (state) => {
      state.loadingTrainers = 'loading';
    },
  },
});

const { actions, reducer } = trainersSlice;

export default reducer;
export const { getTrainers } = actions;
