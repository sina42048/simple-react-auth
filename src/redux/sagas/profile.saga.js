import { call, takeLatest, put, all, delay } from "redux-saga/effects";
import { loginApi, registerApi } from "../../services/profile.service";
import { loginFailed, loginRequest, loginSuccess, registerFailed, registerRequest, registerSuccess } from "../profile/profile.reducer";

function* login({ payload: { email, password } }) {
    try {
        const userData = yield call(loginApi, email, password);
        yield delay(2000);
        if (userData.length) {
            yield put(loginSuccess({ userData }));
        } else {
            yield put(loginFailed({ errorMessage: "user not found" }));
        }
    } catch (err) {
        yield put(loginFailed({ errorMessage: err }));
    }
}

function* register({ payload: { name, email, password } }) {
    try {
        const registerResult = yield call(registerApi, name, email, password);
        yield delay(2000);
        if (registerResult) {
            yield put(registerSuccess());
        } else {
            yield put(registerFailed({ errorMessage: "failed to register user" }));
        }
    } catch (err) {
        yield put(registerFailed({ errorMessage: err }));
    }
}

function* loginSaga() {
    yield takeLatest(loginRequest, login);
}

function* registerSaga() {
    yield takeLatest(registerRequest, register);
}

function* rootSaga() {
    yield all([loginSaga(), registerSaga()]);
}

export default rootSaga;