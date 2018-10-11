import exampleData from './exampleData.js';
import React, { Component } from 'react';

const Movies = (props) => (
  <div>
    {exampleData.map((movie) =>
      <ul>{movie.title}</ul>
    )}
  </div>
)


export default Movies;
