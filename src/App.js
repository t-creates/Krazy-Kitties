import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import { cats } from './Cats';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: cats,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredcats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc '>
        <h1>Krazy Kitties</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cats={filteredcats} />
      </div>
    );
  }
}


export default App;