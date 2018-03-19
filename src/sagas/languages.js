import { delay  } from 'redux-saga'
import { call, put, takeLatest, take } from 'redux-saga/effects'
import Api from 'axios'

import * as languagesDuck from '../redux/languages';
import {SET_SELECTED} from "../redux/languages";

function* fetchLanguages(action) {
    try {
        const res = yield call(Api.get, 'http://localhost:3001/api/languages/');
        yield put({type: languagesDuck.SUCCEEDED, languages: res.data});
    } catch (e) {
        yield put({type: languagesDuck.FAILED, message: e.message});
    }
}

function* patchLanguages(action) {
    try {
        const res = yield call(Api.patch, 'http://localhost:3001/api/languages/', action.payload);
    } catch (e) {
        yield put({type: languagesDuck.FAILED, message: e.message});
    }
}

export default [
    takeLatest(languagesDuck.REQUEST, fetchLanguages),
    takeLatest([languagesDuck.SET_SELECTED, languagesDuck.REQUEST_PATCH], patchLanguages),
]
