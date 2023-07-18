import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'Movie Slice',
    initialState: {
        value: [
            { title: 'Spider Man', genre: 'Action' },
            { title: 'Avengers', genre: 'Adventure' },
            { title: 'Barbie', genre: 'Comedy' },
        ], // No records initially
    },
    reducers: {
        remove: function (state, action) {
            state.value.splice(action.payload, 1);
        },
        add: function (state, action) {
            state.value.push(action.payload);
        },
        update: function (state, action) {
            // action.payload = { index: 2, movie: {title: '...', genre: '...'} }
            state.value[action.payload.index] = action.payload.movie;
        },
    },
});

// Dispatch these to update the state in your component
export const { remove, add, update } = movieSlice.actions;

// This part gets registered into the store.
export default movieSlice.reducer;
