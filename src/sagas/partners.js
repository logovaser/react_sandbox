import { call, put, takeLatest } from 'redux-saga/effects'
import Api from 'axios'

import * as duck from '../redux/partners';

function* find(action) {
    try {
        const res = yield call(Api.get, 'http://localhost:3001/api/languages/');
        yield put({type: duck.FOUND, payload: res.data});
    } catch (e) {
        yield put({type: duck.FAILED, message: e.message});
    }
}


export default [
    takeLatest(duck.FIND, find),
]
