import { call, put, takeLatest } from 'redux-saga/effects'
import Api from 'axios'

import * as languagesDuck from '../redux/languages';

function* fetchLanguages(action) {
    try {
        const res = yield call(Api.get, 'http://localhost:3001/api/languages');
        console.log(res);
        yield put({type: languagesDuck.SUCCEEDED, languages: res.data});
    } catch (e) {
        yield put({type: languagesDuck.FAILED, message: e.message});
    }
}

export default [
    takeLatest(languagesDuck.REQUEST, fetchLanguages),
]
