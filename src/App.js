import { Component } from 'react'

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.json())
      .then(users => { this.setState(() => { return { monster: users } }, () => { console.log(this.state); }) })
  }


  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster' onChange={(event)=>{  }} />
        {this.state.monster.map(monster => {
          return <h1 key={monster.id} >{monster.name}</h1>
        })}
      </div>
    )
  };
}

export default App;
