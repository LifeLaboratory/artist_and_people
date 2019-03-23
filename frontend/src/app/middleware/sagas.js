import {call, put, takeEvery} from 'redux-saga/effects'
import * as ActionTypes from "../constants/ActionTypes";
import fetch from "cross-fetch"
import { push, goBack } from 'connected-react-router'

async function fetchLogin(credentials) {
    return fetch('http://hackuniversity.crabdance.com/api/v1/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
}

function* tryLogin(action) {

    try {
        const response = yield call(fetchLogin, action.credentials);

        switch (response.status) {
            case 200:
                yield put({type: ActionTypes.LOGIN_SUCCEEDED})
                break
            case 401:
                yield put({type: ActionTypes.LOGIN_FAILED, message: "Неправильный логин или пароль"})
                break
            default:
                console.error('Unknown status from server: ' + response.status)
                yield put({type: ActionTypes.LOGIN_FAILED, message: "Неизвестная ошибка. Попробуйте позже"})
        }
    }
    catch (e) {
        console.error(e)
        yield put({type: ActionTypes.LOGIN_FAILED, message: "Неизвестная ошибка. Попробуйте позже"})
    }

}

function* tryOpenFire() {
    yield put(push('/fire'))
}

function* tryGoBack() {
    yield put(goBack())
}


export default function* mySaga() {
    yield takeEvery(ActionTypes.TRY_LOGIN, tryLogin);
    yield takeEvery(ActionTypes.OPEN_FIRE, tryOpenFire);
    yield takeEvery(ActionTypes.GO_BACK, tryGoBack);
}