import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type InitialStateProps = {
  initialState: null | string;
};

const initialState: InitialStateProps = {
  initialState: '',
};

export const cardIdSlice = createSlice({
  name: 'cardId',
  initialState,
  reducers: {
    changeCardId: (state, action: PayloadAction<null | string>) => {
      state.initialState = action.payload;
    },
  },
});

export const { actions, reducer } = cardIdSlice;
