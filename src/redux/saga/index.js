import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import registerSaga from "./registerSaga";

export function* rootSaga() {
  yield all([fork(userSaga), fork(registerSaga)]);
}
