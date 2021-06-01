import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import registerSaga from "./registerSaga";
import feedSaga from "./feedSaga";
import testingsaga from "./testingSaga";
import replySaga from "./replySaga";

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(registerSaga),
    fork(feedSaga),
    fork(testingsaga),
    fork(replySaga),
  ]);
}
