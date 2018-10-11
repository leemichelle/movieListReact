import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import exampleData from './exampleData.js';
import Movies from './Movies.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleData[0].title
    }
  }
  render() {
    console.log(exampleData[0])
    return (
      <div className="App">
        <h1>Movie List</h1>
        <Movies />
      </div>
    );
  }
}

export default App;
