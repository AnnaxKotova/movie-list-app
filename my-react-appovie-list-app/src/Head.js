import React from 'react';

function Head(props) {
    return (
      <div className="movie_head">
        <img src={props.image} alt={props.name}/>
        <h1>{props.name}</h1>    
      </div>
    );
  }


export default Head;