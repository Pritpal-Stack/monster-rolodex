import { Component } from 'react'

import './App.css';
//components
import CardList from './components/card-list/card-list.component'; 
import SearchBox from './components/search-box/search-box.component'; 

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.json())
      .then(users => {
        this.setState(
          () => { return { monster: users } },
          () => { /*console.log(this.state);*/ })
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => { return { searchField } })
  }


  render() {
    const { searchField, monster } = this.state;
    const { onSearchChange } = this

    const filteredMonster = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })


    return (
      <div className="App">
        <SearchBox onChangeHandler={ onSearchChange } className='monster-search-box' placeholder='Search Monster' ></SearchBox>

        <CardList monsters={filteredMonster} ></CardList>

      </div>
    )
  };
}

export default App;
