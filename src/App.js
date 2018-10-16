import React from 'react';
import './App.css';
import exampleData from './components/exampleData.js';
import Movies from './components/Movies.js';
import SearchBar from './components/SearchBar.js';
import InputField from './components/inputField.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleData
    }
  }

  handleSearch(event) {
    let searchInput = event.target.value;
    let searchResult = this.state.movies.filter((movie) =>
      movie.title.includes(searchInput)
    )
    this.setState({
      movies: searchResult
    })
  }

  addTitle(event) {
    event.preventDefault();
    let inputValue = event.target.value;
    console.log('this is input value', inputValue)
    console.log('this is state', this.state.movies)
    let newList = this.state.movies.concat([{title: inputValue}]);
    console.log('this is new list', newList)
    this.setState({
      movies: newList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
          <InputField addTitle = {this.addTitle.bind(this)}/>
          <SearchBar handleSearch = {this.handleSearch.bind(this)}/>
          <Movies movies = {this.state.movies}/>
      </div>
    );
  }
}

export default App;
