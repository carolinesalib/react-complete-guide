import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'

class App extends Component {
  // state only works in Components
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Max2', age: 8 },
      { id: 3, name: 'Max3', age: 18 },
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  };

  deletePersonHandler = (personIndex) => {
    // copies the array, more safe way to set state without mutate the state
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app</h1>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { persons }
      </div>
    );
  }
}

export default App;
