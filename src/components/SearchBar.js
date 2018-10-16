import React from 'react';

const SearchBar = (props) => (
  <input type = 'text' placeholder = 'Search...' onChange = {props.handleSearch}></input>
)

export default SearchBar;
