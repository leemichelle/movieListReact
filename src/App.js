import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import exampleData from './exampleData.js';
import Movies from './Movies.js';
import Search from './search.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleData
    }
  }

  handleSearch() {
    console.log('that\'s so fetch')
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
          <Search handleSearch={this.handleSearch.bind(this)}/>
          <Movies />
      </div>
    );
  }
}

export default App;
