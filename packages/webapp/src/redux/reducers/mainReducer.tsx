import * as t from '../type';

const initialState = {
    
};

const mainReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        
        case t.SET_CITY_NAME_SUCCESS:
            return {
                ...state, 
                data: action.payload,
                };
        default:
            return { ...state };
    }
};

export default mainReducer;
