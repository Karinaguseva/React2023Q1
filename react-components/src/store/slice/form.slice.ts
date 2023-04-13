import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BeastCard } from '../../types/beastCard';

const initialState: BeastCard[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, { payload }: PayloadAction<BeastCard>) => {
      state.push(payload);
    },
  },
});

export const { actions, reducer } = formSlice;
