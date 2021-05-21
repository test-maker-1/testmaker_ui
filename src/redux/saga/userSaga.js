import { takeEvery } from "redux-saga/effects";
import UserAPI from "../../api/userAPI";
import { kakaoLogIn } from "../reducer/userReducer";
import { createPromiseSaga } from "../../utils/asyncUtils";

const kakaoLogInSaga = createPromiseSaga(kakaoLogIn.type, UserAPI.kakaoLogIn);

export function* userSaga() {
  yield takeEvery(kakaoLogIn.type, kakaoLogInSaga);
}
