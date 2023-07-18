import React from 'react';
import Movie from './Movie';
import AddMovie from './AddMovie';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './MovieSlice';

const defaultMovies = [
    { title: 'Spider Man', genre: 'Action' },
    { title: 'Avengers', genre: 'Adventure' },
    { title: 'Barbie', genre: 'Comedy' },
];

export default function Home() {
    const movies = useSelector((store) => store.movies.value);
    const dispatch = useDispatch();
    return (
        <div>
            <AddMovie onSubmit={(movie) => dispatch(add(movie))} />
            <div style={{ display: 'flex' }}>
                {movies.map((movie, index) => (
                    <Movie key={index} index={index} movie={movie} onRemove={() => dispatch(remove(index))} />
                ))}
            </div>
        </div>
    );
}
