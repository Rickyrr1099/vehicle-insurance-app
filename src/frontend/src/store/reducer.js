import * as actionTypes from './actions';

const initialState = {
    email: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_EMAIL:
            return { email: action.email };
        default:
            return state;
    }
};

export default reducer;