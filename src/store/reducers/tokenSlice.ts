import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const boothInfoSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {
    addToken(
      state: {token: null | string},
      action: {payload: {token: string}},
    ) {
      state.token = action.payload.token;
    },
  },
});

export const Actions = boothInfoSlice.actions;
export default boothInfoSlice;
