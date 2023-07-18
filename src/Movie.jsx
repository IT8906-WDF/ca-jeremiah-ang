import { Link } from 'react-router-dom';

export default function Movie(props) {
    const movie = props.movie;
    return (
        <div style={{ width: 100, height: 100, border: 'black solid 1px', textAlign: 'center', margin: 5 }}>
            <p>
                <b>
                    {movie.title} ({props.index})
                </b>
            </p>
            <p>{movie.genre}</p>
            <button onClick={props.onRemove}>🗑️</button>
            <Link to={`/update/${props.index}`}>
                <button>✏️</button>
            </Link>
        </div>
    );
}
