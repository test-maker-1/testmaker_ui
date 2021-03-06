import {
  call,
  put,
  fork,
  all,
  takeLeading,
  takeLatest,
} from "redux-saga/effects";
import { saveResult } from "../reducer/testingReducer";
import {
  getTestResultInfo,
  getTestResultInfoSuccess,
  getTestResultInfoError,
  shareResult,
  postFeedback,
} from "../reducer/resultReducer";
import { setLoading, setError } from "../reducer/commonReducer";
import testingAPI from "../../api/testingAPI";
import { createPromiseSaga, SUCCESS } from "../../utils/asyncUtils"; //

// const getResultInform = createPromiseSaga(
//   getTestResultInfo.type,
//   testingAPI.getResultInfo
// );

//#region > 테스트 결과 가져오기
function* getResultInform(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getResultInfo, param);

  if (status === SUCCESS && data.testResults.length > 0) {
    yield updateTestResult({ payload: data });
  } else {
    yield put({
      type: getTestResultInfoError.type,
      payload: data,
    });
  }
}

function* updateTestResult(action) {
  const data = action.payload;
  const {
    isRankMode,
    responseUid,
    testUid,
    recent3Replies,
    repliesCnt,
    testResults,
    userTestResult,
  } = data;

  yield put({
    type: getTestResultInfoSuccess.type,
    payload: {
      isRankMode,
      responseUid,
      testUid,
      recent3Replies,
      repliesCnt,
      testResults,
      userTestResult,
    },
  });
}

function* getResultInformSuccess(action) {
  //로딩바 닫기
  yield put({ type: setLoading.type, payload: false });
}

function* getResultInformError() {
  //로딩바 닫기 및 오류 화면 표시
  yield put({ type: setError.type, payload: true });
  yield put({ type: setLoading.type, payload: false });
}

const updateShareResult = createPromiseSaga(
  shareResult.type,
  testingAPI.shareResultInfo
);
//#endregion

//피드백 작성
const sendFeedback = createPromiseSaga(
  postFeedback.type,
  testingAPI.postFeedbackMaker
);

function* getResultInfromation() {
  yield takeLeading(getTestResultInfo.type, getResultInform);
  yield takeLeading(getTestResultInfoSuccess.type, getResultInformSuccess);
  yield takeLatest(getTestResultInfoError.type, getResultInformError);
  yield takeLeading(saveResult.type, updateTestResult);
  yield takeLeading(shareResult.type, updateShareResult);
  yield takeLeading(postFeedback.type, sendFeedback);
}

export default function* resultSaga() {
  yield all([fork(getResultInfromation)]);
}
