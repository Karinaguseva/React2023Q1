import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    initialState: '',
};
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, action) => {
            state.initialState = action.payload;
        },
    },
});
export const { actions, reducer } = searchSlice;
