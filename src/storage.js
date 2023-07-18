// storage.js
import { configureStore } from '@reduxjs/toolkit';
import MovieSlice from './MovieSlice';

export default configureStore({
    reducer: {
        // Register reducers here
        movies: MovieSlice,
    },
});
