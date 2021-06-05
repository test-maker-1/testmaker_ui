import { call, put, fork, all, takeLeading } from "redux-saga/effects";
import {
  getTestResultInfo,
  getTestResultInfoSuccess,
  getTestResultInfoError,
  updateTestResult,
} from "../reducer/resultReducer";
import { setLoading, setError } from "../reducer/commonReducer";
import testingAPI from "../../api/testingAPI";
import { createPromiseSaga, SUCCESS } from "../../utils/asyncUtils"; //createPromiseSaga

const getResultInform = createPromiseSaga(
  getTestResultInfo.type,
  testingAPI.getResultInfo
);

function* getResultInformSuccess(action) {
  //로딩바 닫기
  yield put({ type: setLoading.type, payload: false });
}

function* getResultInformError() {
  //로딩바 닫기 및 오류 화면 표시
  yield put({ type: setError.type, payload: true });
  yield put({ type: setLoading.type, payload: false });
}
//#endregion

function* getResultInform1(action) {
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
  yield takeLeading(getTestResultInfo.type, getResultInform);
  yield takeLeading(getTestResultInfoSuccess.type, getResultInformSuccess);
  yield takeLeading(getTestResultInfoError.type, getResultInformError);
  // yield takeLeading(getTestResult.type, get)
}

export default function* resultSaga() {
  yield all([fork(getResultInfromation)]);
}
