import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import registerSaga from "./registerSaga";
import testingsaga from "./testingSaga";
import replySaga from "./replySaga";

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(registerSaga),
    fork(testingsaga),
    fork(replySaga),
  ]);
}
