import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addCard: (state, { payload }) => {
            state.push(payload);
        },
    },
});
export const { actions, reducer } = formSlice;
