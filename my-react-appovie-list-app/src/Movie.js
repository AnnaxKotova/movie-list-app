import React from 'react';
import Head from './Head'
import Description from './Description';

function Movie(props) {
    return (
      <div className="movie_container">
        <Head image={props.movieObj.posterURL} name={props.movieObj.title}></Head>
        <Description year={props.movieObj.year} genre={props.movieObj.genre}></Description>
      </div>
    );
  }


export default Movie;