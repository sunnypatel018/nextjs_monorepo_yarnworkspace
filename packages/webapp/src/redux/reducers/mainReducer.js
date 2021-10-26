import * as t from '../type.js';

const initialState = {
    
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case t.SET_CITY_NAME_SUCCESS:
            return {...state, data: action.payload};
        default:
            return { ...state };
    }
};

export default mainReducer;
