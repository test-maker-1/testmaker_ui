import cookie from "react-cookies";
import { call, put, all, fork, takeLeading } from "redux-saga/effects";

import UserAPI from "../../api/userAPI";
import {
  initUserInfo,
  checkLogIn,
  kakaoLogIn,
  logOut,
} from "../reducer/userReducer";

import { createPromiseSaga, SUCCESS } from "../../utils/asyncUtils";

function* checkLogInSaga(action) {
  const { data, status } = yield call(UserAPI.refreshToken);

  if (status === SUCCESS) {
    const token = data.token;
    const { data: user, status: userStatus } = yield call(UserAPI.getMyInfo);

    if (userStatus === SUCCESS) {
      yield put({
        type: `${action.type}Success`,
        payload: {
          user,
          token,
        },
      });
    } else {
      cookie.remove("token");
      yield put({ type: initUserInfo.type });
    }
  } else {
    cookie.remove("token");
    yield put({ type: initUserInfo.type });
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
