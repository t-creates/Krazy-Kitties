import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredcats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.cats.length === 0) {
      return <h1>LOADING...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1' >Krazy Kitties</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList cats={filteredcats} />
          </Scroll>
        </div>
      );
    }
  }
}


export default App;