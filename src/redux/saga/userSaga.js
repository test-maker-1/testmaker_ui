import cookie from "react-cookies";
import { call, put, fork, all, takeLeading } from "redux-saga/effects";

import UserAPI from "../../api/userAPI";
import { checkLogIn, kakaoLogIn, logOut } from "../reducer/userReducer";

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

function* watchCheckLogin() {
  yield takeLeading(checkLogIn.type, checkLogInSaga);
}

function* watchKakaoLogIn() {
  yield takeLeading(kakaoLogIn.type, kakaoLogInSaga);
}

function* watchLogOut() {
  yield takeLeading(logOut.type, logOutSaga);
}

export default function* userSaga() {
  yield all([fork(watchCheckLogin), fork(watchKakaoLogIn), fork(watchLogOut)]);
}
