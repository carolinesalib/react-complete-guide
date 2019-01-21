// we don't need the component because we aren't use Component class, just declaring a function
import React from 'react';
import './Person.css';

// const because we don't intent to change this variable
const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>);
}

export default person;
