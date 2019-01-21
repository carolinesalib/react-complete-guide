import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // state only works in Components
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Max2', age: 8 },
      { name: 'Max3', age: 18 },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Max2', age: 8 },
        { name: 'Max3', age: 18 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 8 },
        { name: 'Max3', age: 18 },
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler( 'teste')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age='28' />
        <Person
          name={this.state.persons[1].name}
          age='8'
          click={this.switchNameHandler.bind(this, 'teste2')}
          changed={this.nameChangedHandler} >My hobbies: Racing</Person>
        <Person
          name='Max3'
          age='18' />
      </div>
    );
  }
}

export default App;
