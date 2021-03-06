import { put, call, takeEvery, all } from 'redux-saga/effects';
import { SET_CITY_NAME,SET_CITY_NAME_SUCCESS } from '../type';
import {  setCityNameSuccess } from '../actions/action';
import { fetchData } from '../../pages/api/api';

function* setCityNameAsync (action: { payload: any; }) {
    const data = yield call (fetchData, action.payload)
    console.log(data)
    yield put(setCityNameSuccess(data));
}

export default function* actionWatcher() {
    yield all([takeEvery(SET_CITY_NAME, setCityNameAsync)]);
}


