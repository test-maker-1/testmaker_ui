import {
  select,
  call,
  put,
  fork,
  all,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import {
  getTestInfo,
  getTestInfoSuccess,
  getTestInfoError,
  getTestExam,
  getTestExamSuccess,
  getTestExamError,
  saveAnwerByStep,
  saveResult,
} from "../reducer/testingReducer";
import { setLoading, setError } from "../reducer/commonReducer";
import testingAPI from "../../api/testingAPI";
import { createPromiseSaga, SUCCESS, ERROR } from "../../utils/asyncUtils"; //createPromiseSaga

//#region >> 테스트 정보 불러오기 (welcome)
const getTestInform = createPromiseSaga(
  getTestInfo.type,
  testingAPI.getTestInfo
);

function* getTestInformSuccess() {
  //로딩바 닫기
  yield put({ type: setLoading.type, payload: false });
}

function* getTestInformError() {
  //로딩바 닫기 및 오류 화면 표시
  yield put({ type: setError.type, payload: true });
  yield put({ type: setLoading.type, payload: false });
}
//#endregion

//#region >> 테스트 시작! (exam)
function* getTestExamInform(action) {
  const { payload } = action;
  let type = ERROR,
    result = {};
  if (payload.mode === "preview") {
    //미리보기
    let storage = window.sessionStorage.getItem(payload.testid);
    storage = storage ? JSON.parse(storage) : {};

    if (["questions", "questsCnt"] in storage) {
      type = SUCCESS;
    } else {
      type = ERROR;
    }
  } else {
    //API 호출
    const { data, status } = yield call(testingAPI.getTesting, payload.testid);

    result = data;
    type = status;
  }

  if (type === SUCCESS) {
    yield put({
      type: getTestExamSuccess.type,
      payload: result,
    });
  } else {
    yield put({
      type: getTestInfoError.type,
      payload: result,
    });
  }
}
// const getTestExamInform = createPromiseSaga(getTestExam.type,testingAPI.getTesting);

function* getTestExamInformSuccess(action) {
  //로딩바 닫기
  yield put({ type: setLoading.type, payload: false });
}

function* getTestExamInformError() {
  //로딩바 닫기 및 오류 화면 표시
  yield put({ type: setError.type, payload: true });
  yield put({ type: setLoading.type, payload: false });
}

function* insertExam(action) {
  const state = yield select();
  const { payload } = action;

  if (!payload.isIng) {
    yield put({ type: setLoading.type, payload: true });
    //마지막 시험지일 경우 결과 페이지 이동
    const { data, status } = yield call(
      testingAPI.postTesting,
      state.testing.current_testID,
      state.testing.answers.values
    );

    if (status === SUCCESS) {
      yield put({
        type: saveResult.type,
        payload: data,
      });
    }
  }
}

// function* moveResultPage(action) {
//   const {
//     payload: { responseUid },
//   } = action;

//   // yield (window.location.replace(`${window.location.origin}/testing/result?resultid=${responseUid}`));
//   yield window.history.replaceState(
//     { resultid: responseUid },
//     "result",
//     `${window.location.origin}/testing/result?resultid=${responseUid}`
//   );
// }
//#endregion

function* getTestInformation() {
  yield takeLeading(getTestInfo.type, getTestInform);
  yield takeLatest(getTestInfoSuccess.type, getTestInformSuccess);
  yield takeLatest(getTestInfoError.type, getTestInformError);
  yield takeLatest(getTestExam.type, getTestExamInform);
  yield takeLatest(getTestExamSuccess.type, getTestExamInformSuccess);
  yield takeLatest(getTestExamError.type, getTestExamInformError);
  yield takeLatest(saveAnwerByStep.type, insertExam);
  // yield takeLatest(saveResult.type, moveResultPage);
}

export default function* testingsaga() {
  yield all([fork(getTestInformation)]);
}
