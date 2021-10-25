import * as t from '../type.js';

const initialState = {
    name: 'guest',
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.SET_NAME_SUCCESS:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return { ...state };
    }
};

export default mainReducer;
