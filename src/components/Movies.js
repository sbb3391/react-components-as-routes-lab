import React from 'react';
import { movies } from '../data';


const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h1>{movie.title}</h1>
            <h2>{movie.time}</h2>
            <ul>
              {movie.genres.map((genre, index) => (
                <ul key={index}>{genre}</ul>
              ))}
            </ul>
          </div>
        ))
        }

    </div>
  );
};

export default Movies;
