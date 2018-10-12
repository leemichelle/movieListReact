import React, { Component } from 'react';

const Search = (props) => (
  <form onChange = {props.handleSearch}>
    <input type='search'></input>
  </form>
);

export default Search;
