import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from "../reducers/actions";

class Persons extends Component {
    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        };

        this.props.onAddPerson(newPerson);
    };

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        persons: state.persons.persons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (person) => dispatch({type: actionTypes.ADD_PERSON, person: person}),
        onDeletePerson: (person_id) => dispatch({type: actionTypes.DELETE_PERSON, person_id: person_id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
