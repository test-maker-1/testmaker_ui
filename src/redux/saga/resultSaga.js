import { call, put, fork, all, takeLeading } from "redux-saga/effects";
import { setTestResultID, updateTestResult } from "../reducer/resultReducer";
import testingAPI from "../../api/testingAPI";
import { SUCCESS } from "../../utils/asyncUtils"; //createPromiseSaga

function* getResultInform(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getResultInfo, param);

  if (status === SUCCESS) {
    const {
      isRankMode,
      recent3Replies,
      repliesCnt,
      testResults,
      userTestResult,
    } = data;

    yield put({
      type: updateTestResult.type,
      payload: {
        isRankMode,
        recent3Replies,
        repliesCnt,
        testResults,
        userTestResult,
      },
    });
  }
}

function* getResultInfromation() {
  yield takeLeading(setTestResultID.type, getResultInform);
  // yield takeLeading(getTestResult.type, get)
}

export default function* resultSaga() {
  yield all([fork(getResultInfromation)]);
}
