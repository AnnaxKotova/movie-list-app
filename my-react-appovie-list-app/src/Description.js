import React from 'react';

function Description(props) {
    return (
      <div className="movie_description">
        <p className="movie_year"><span>Year:</span><span>{props.year}</span></p>
        <p className="movie_genre"><span>Genre:</span><span>{props.genre}</span></p>
      </div>
    );
  }


export default Description;