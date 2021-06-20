import cookie from "react-cookies";
import { call, put, fork, all, takeLeading } from "redux-saga/effects";

import UserAPI from "../../api/userAPI";
import {
  checkLogIn,
  kakaoLogIn,
  logOut,
  partTests,
  getUserInfo,
  madeTests,
  tempSaveTests,
  updatePartTests,
  updateMadeTests,
} from "../reducer/userReducer";

import {
  createPromiseSaga,
  createActionString,
  SUCCESS,
} from "../../utils/asyncUtils";

function* checkLogInSaga(action) {
  const { data, status } = yield call(UserAPI.refreshToken);
  const { success, error } = createActionString(action.type);

  if (status === SUCCESS) {
    const token = data.token;
    const { data: user, status: userStatus } = yield call(UserAPI.getMyInfo);

    if (userStatus === SUCCESS) {
      yield put({
        type: success,
        payload: {
          user,
          token,
        },
      });
    } else {
      cookie.remove("token");
      yield put({ type: error, payload: user });
    }
  } else {
    cookie.remove("token");
    yield put({ type: error, payload: data });
  }
}

const kakaoLogInSaga = createPromiseSaga(kakaoLogIn.type, UserAPI.kakaoLogIn);
const logOutSaga = createPromiseSaga(logOut.type, UserAPI.logOut);

const getUserInfoSaga = createPromiseSaga(getUserInfo.type, UserAPI.getMyInfo);
const partTestsSaga = createPromiseSaga(partTests.type, UserAPI.partTests);
const madeTestsSaga = createPromiseSaga(madeTests.type, UserAPI.madeTests);
const tempSaveTestsSaga = createPromiseSaga(
  tempSaveTests.type,
  UserAPI.tempSaveTests
);

const updatePartTestsSaga = createPromiseSaga(
  updatePartTests.type,
  UserAPI.partTests
);
const updateMadeTestsSaga = createPromiseSaga(
  updateMadeTests.type,
  UserAPI.madeTests
);

function* watchCheckLogin() {
  yield takeLeading(checkLogIn.type, checkLogInSaga);
}

function* watchKakaoLogIn() {
  yield takeLeading(kakaoLogIn.type, kakaoLogInSaga);
}

function* watchLogOut() {
  yield takeLeading(logOut.type, logOutSaga);
}

function* watchGetUserInfo() {
  yield takeLeading(getUserInfo.type, getUserInfoSaga);
}

function* watchPartTests() {
  yield takeLeading(partTests.type, partTestsSaga);
}

function* watchMadeTests() {
  yield takeLeading(madeTests.type, madeTestsSaga);
}

function* watchTempSaveTests() {
  yield takeLeading(tempSaveTests.type, tempSaveTestsSaga);
}

function* watchUpdatePartTests() {
  yield takeLeading(updatePartTests.type, updatePartTestsSaga);
}

function* watchUpdateMadeTests() {
  yield takeLeading(updateMadeTests.type, updateMadeTestsSaga);
}

export default function* userSaga() {
  yield all([
    fork(watchCheckLogin),
    fork(watchKakaoLogIn),
    fork(watchLogOut),
    fork(watchGetUserInfo),
    fork(watchPartTests),
    fork(watchMadeTests),
    fork(watchTempSaveTests),
    fork(watchUpdatePartTests),
    fork(watchUpdateMadeTests),
  ]);
}
