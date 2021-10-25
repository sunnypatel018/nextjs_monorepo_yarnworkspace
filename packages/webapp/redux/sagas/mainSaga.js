import { put, call, takeEvery, all } from 'redux-saga/effects';
import { SET_NAME, SET_NAME_SUCCESS } from '../type.js';
import { setName, setNameSuccess } from '../actions/action.js';

function* setNameAsync (action) {
    yield put(setNameSuccess(action.payload));
}

export default function* actionWatcher() {
    yield all([takeEvery(SET_NAME, setNameAsync)]);
}


