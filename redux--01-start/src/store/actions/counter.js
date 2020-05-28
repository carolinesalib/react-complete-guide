import * as actionTypes from "./actionTypes";

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT,
    }
};

export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
    }
};

export const add = () => {
    return {
        type: actionTypes.ADD,
        value: 8,
    }
};

export const subtract = () => {
    return {
        type: actionTypes.SUBTRACT,
        value: 8,
    }
};
