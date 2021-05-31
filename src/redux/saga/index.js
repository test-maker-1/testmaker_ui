import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import registerSaga from "./registerSaga";
import feedSaga from "./feedSaga";

export function* rootSaga() {
  yield all([fork(userSaga), fork(registerSaga), fork(feedSaga)]);
}
