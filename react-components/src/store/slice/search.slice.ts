import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialState: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.initialState = action.payload;
    },
  },
});

export const { actions, reducer } = searchSlice;
