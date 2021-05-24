import { all, fork, takeLatest } from "redux-saga/effects";
import { createPromiseSaga } from "../../utils/asyncUtils";
import { emailAuth, nickNameCheck, signUp } from "../reducer/registerReducer";
import RegisterAPI from "../../api/registerAPI";

const emailAuthRequest = createPromiseSaga(emailAuth, RegisterAPI.emailAuth);
const nickNameCheckRequest = createPromiseSaga(
  nickNameCheck,
  RegisterAPI.nickNameCheck
);
const signUpRequest = createPromiseSaga(signUp, RegisterAPI.signUp);

function* watchEmailAuth() {
  yield takeLatest(emailAuth.type, emailAuthRequest);
}

function* watchNickNameCheck() {
  yield takeLatest(nickNameCheck.type, nickNameCheckRequest);
}

function* watchSignUp() {
  yield takeLatest(signUp.type, signUpRequest);
}

export default function* registerSaga() {
  yield all([
    fork(watchEmailAuth),
    fork(watchNickNameCheck),
    fork(watchSignUp),
  ]);
}
