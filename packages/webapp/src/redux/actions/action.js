import * as t from '../type.js';

export const setCityName = (cityName) =>({
        type: t.SET_CITY_NAME,
        payload: cityName,
    });

export const setCityNameSuccess = (data) => ({
    type: t.SET_CITY_NAME_SUCCESS,
    payload: data,
});
