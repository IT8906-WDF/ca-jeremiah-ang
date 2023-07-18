export default function Movie(props) {
    const movie = props.movie;
    return (
        <div style={{ width: 100, height: 100, border: 'black solid 1px', textAlign: 'center', margin: 5 }}>
            <p>
                <b>{movie.title}</b>
            </p>
            <p>{movie.genre}</p>
            <button onClick={props.onRemove}>🗑️</button>
        </div>
    );
}
