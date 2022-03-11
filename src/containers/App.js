import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
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
    const { cats, searchfield } = this.state;
    const filteredcats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cats.length ?
      <h1>LOADING...</h1> :
      (
        <div className='tc'>
          <h1 className='f1' >Krazy Kitties</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList cats={filteredcats} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}


export default App;