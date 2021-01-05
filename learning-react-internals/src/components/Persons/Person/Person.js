// we don't need the component because we aren't use Component class, just declaring a function
import React, {useRef, useEffect} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// const because we don't intent to change this variable
const person = (props) => {
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.focus();
  }, []);

  return (
    <div className={classes.Person}>
      <AuthContext.Consumer>
        {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
      </AuthContext.Consumer>
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
        <input
          type="text"
          ref={inputElementRef}
          onChange={props.changed}
          value={props.name}
        />
    </div>);
}

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default person;
