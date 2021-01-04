// we don't need the component because we aren't use Component class, just declaring a function
import React from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

// const because we don't intent to change this variable
const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>);
}

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default person;
