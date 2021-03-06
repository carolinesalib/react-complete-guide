import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  // state only works in Components
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Max2', age: 8 },
      { id: 3, name: 'Max3', age: 18 },
    ],
    showPersons: false,
    authenticated: false,
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

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <Aux>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          { persons }
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
