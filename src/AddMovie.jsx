import React from 'react';

export default function AddMovie(props) {
    const [title, setTitle] = React.useState(props.movie ? props.movie.title : '');
    const [genre, setGenre] = React.useState(props.movie ? props.movie.genre : '');

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSubmit({ title: title, genre: genre });
                    return false;
                }}
            >
                <label>
                    Title:
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Genre:
                    <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Horror</option>
                        <option>Comedy</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
