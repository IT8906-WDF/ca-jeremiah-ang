import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AddMovie from './AddMovie';
import { update } from './MovieSlice';

export default function UpdateMovie(props) {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    const movie = useSelector((store) => store.movies.value[params.movieIndex]);
    const dispatch = useDispatch();
    return !movie ? (
        <h1>Movie {params.movieIndex} NOT FOUND!</h1>
    ) : (
        <div>
            <AddMovie
                movie={movie}
                onSubmit={(newMovie) => {
                    dispatch(update({ index: params.movieIndex, movie: newMovie }));
                    navigate('/');
                }}
            />
        </div>
    );
}
