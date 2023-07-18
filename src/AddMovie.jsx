import React from 'react';

export default function AddMovie(props) {
    const titleRef = React.useRef();
    const genreRef = React.useRef();

    React.useEffect(() => {
        if (props.movie) {
            titleRef.current.value = props.movie.title;
            genreRef.current.value = props.movie.genre;
        }
    }, []);

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSubmit({ title: titleRef.current.value, genre: genreRef.current.value });
                    return false;
                }}
            >
                <label>
                    Title:
                    <input ref={titleRef} type="text" name="title" />
                </label>
                <label>
                    Genre:
                    <select ref={genreRef} name="genre">
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
