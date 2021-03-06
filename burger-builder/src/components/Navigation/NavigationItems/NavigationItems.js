import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
);

export default navigationItems;
