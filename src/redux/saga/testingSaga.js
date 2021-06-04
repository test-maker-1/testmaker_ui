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
  setTestID,
  updateTestInfo,
  getTestExam,
  updateTestExam,
  saveAnwerByStep,
  saveResult,
} from "../reducer/testingReducer";
import testingAPI from "../../api/testingAPI";
import { SUCCESS } from "../../utils/asyncUtils"; //createPromiseSaga

function* getOneTestInform(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getTestInfo, param);

  if (status === SUCCESS) {
    yield put({
      type: updateTestInfo.type,
      payload: {
        testInfo: data.testDoc,
        recent3replies: data.recent3replies,
      },
    });
  }
}

function* getTestExamInform(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getTesting, param.testID);

  console.log("getTestExamInform3", data, status);
  if (status === SUCCESS) {
    const { questsCnt, questions } = data;
    if (questions?.length > 0) {
      yield put({
        type: updateTestExam.type,
        payload: {
          questsCnt,
          questions,
        },
      });
    }
  }
}

function* insertExam(action) {
  const state = yield select();
  const { payload } = action;

  if (!payload.isIng) {
    //마지막 시험지일 경우 결과 페이지 이동
    const { data, status } = yield call(
      testingAPI.postTesting,
      state.testing.current_testID,
      state.testing.answers.values
    );

    console.log("getTestExamInform3", data, status);
    if (status === SUCCESS) {
      yield put({
        type: saveResult.type,
        payload: data,
      });
    }
  }
}

function* moveResultPage(action) {
  const {
    payload: { responseUid },
  } = action;

  yield (window.location.href = `${window.location.origin}/testing/result?resultid=${responseUid}`);
}

function* getTestInformation() {
  yield takeLeading(setTestID.type, getOneTestInform);
  yield takeLatest(getTestExam.type, getTestExamInform);
  yield takeLatest(saveAnwerByStep.type, insertExam);
  yield takeLatest(saveResult.type, moveResultPage);
}

export default function* testingsaga() {
  yield all([fork(getTestInformation)]);
}
