import {call, put, takeEvery} from 'redux-saga/effects'
import * as ActionTypes from "../constants/ActionTypes";
import fetch from "cross-fetch"
import { push, goBack } from 'connected-react-router'

function* tryOpenFire() {
    yield put(push('/fire'))
}

function* tryOpenEvents() {
    yield put(push('/events'))
}

function* tryGoBack() {
    yield put(goBack())
}


export default function* mySaga() {
    yield takeEvery(ActionTypes.TRY_LOGIN, tryOpenEvents);
    yield takeEvery(ActionTypes.OPEN_FIRE, tryOpenFire);
    yield takeEvery(ActionTypes.GO_BACK, tryGoBack);
}