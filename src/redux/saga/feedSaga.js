import { all, fork, takeLatest } from "redux-saga/effects";
import { createPromiseSaga } from "../../utils/asyncUtils";
import { initFeed, changeTests, updateTests } from "../reducer/feedReducer";
import FeedAPI from "../../api/feedAPI";

const initFeedRequest = createPromiseSaga(initFeed.type, FeedAPI.initFeed);
const changeTestsRequest = createPromiseSaga(
  changeTests.type,
  FeedAPI.testsByTag
);
const updateTestsRequest = createPromiseSaga(
  updateTests.type,
  FeedAPI.testsByTag
);

function* watchInitFeed() {
  console.log("tkrk");
  yield takeLatest(initFeed.type, initFeedRequest);
}

function* watchChangeTests() {
  yield takeLatest(changeTests.type, changeTestsRequest);
}

function* watchUpdateTests() {
  yield takeLatest(updateTests.type, updateTestsRequest);
}

export default function* feedSaga() {
  yield all([
    fork(watchInitFeed),
    fork(watchChangeTests),
    fork(watchUpdateTests),
  ]);
}
