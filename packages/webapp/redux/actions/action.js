import * as t from '../type.js';

export const setName = (name) =>({
        type: t.SET_NAME,
        payload: name,
    });

export const setNameSuccess = (name) => ({
    type: t.SET_NAME_SUCCESS,
    payload: name,
});
