import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const assignedClasses = [];
    let btnClass = '';

    useEffect(() => {
        toggleButtonRef.current.click();
    }, []);

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a react app</h1>
            <p className={assignedClasses.join(' ')}>This is a real ...</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}
            >Switch Name
            </button>
        </div>
    );
};

export default cockpit;
