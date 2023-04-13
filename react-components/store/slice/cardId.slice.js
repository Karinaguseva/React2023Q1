import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    initialState: '',
};
export const cardIdSlice = createSlice({
    name: 'cardId',
    initialState,
    reducers: {
        changeCardId: (state, action) => {
            state.initialState = action.payload;
        },
    },
});
export const { actions, reducer } = cardIdSlice;
