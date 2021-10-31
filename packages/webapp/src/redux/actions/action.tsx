import * as t from '../type';

export const setCityName = (cityName: String) =>({
        type: t.SET_CITY_NAME,
        payload: cityName,
        
    });

export const setCityNameSuccess = (data: any) => ({
    type: t.SET_CITY_NAME_SUCCESS,
    payload: data,
    isLoading: false
});
