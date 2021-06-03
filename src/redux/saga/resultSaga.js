import { generatePath } from "react-router";
import {
  select,
  call,
  put,
  fork,
  all,
  takeLeading,
  takeLatest,
} from "redux-saga/effects";
import {
  setTestResultID,
  updateTestResult,
  getTestResult,
} from "../reducer/resultReducer";
import testingAPI from "../../api/testingAPI";
import { createPromiseSaga, SUCCESS } from "../../utils/asyncUtils";
import { testing, result } from "../../constants/urlInfo";

function* getResultInform(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getResultInfo, param);

  if (status === SUCCESS) {
    console.log("getTestResult", data); //
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
