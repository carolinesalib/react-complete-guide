import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat(action.person)
            };
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter(result => result.id !== action.person_id);

            return {
                ...state,
                persons: updatedArray
            }
    }
    return state;
};

export default reducer;
