import React from 'react';

const Movies = ({movies}) => (
  <div>
    {movies.map((movie) =>
      <ul>{movie.title}</ul>
    )}
  </div>
)

export default Movies;
