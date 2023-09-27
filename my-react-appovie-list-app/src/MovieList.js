import React from 'react';
import Movie from './Movie'
import { movies } from "./moviesData";


function MovieList() {
    return (
        <div>
            {movies.map((movie, index) => (
                <Movie key={index} movieObj={movie}></Movie>
            ))}
        </div>
    );
}


export default MovieList;