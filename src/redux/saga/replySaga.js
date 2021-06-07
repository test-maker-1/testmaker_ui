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
  getReplyInfo,
  submitOneComment,
  addOneComment,
  reportComment,
  moreReplyInfo,
  stopCallComments,
} from "../reducer/replyReducer";
import { setLoading, setError } from "../reducer/commonReducer";
import testingAPI from "../../api/testingAPI";
import { createActionString, SUCCESS } from "../../utils/asyncUtils"; //createPromiseSaga

//#region >> 테스트 정보 불러오기 (welcome)
// const getComments = createPromiseSaga(
//   getTestInfo.type,
//   testingAPI.getTestInfo
// );

// function* getTestInformSuccess() {
//   //로딩바 닫기
//   yield put({ type: setLoading.type, payload: false });
// }

// function* getTestInformError() {
//   //로딩바 닫기 및 오류 화면 표시
//   yield put({ type: setError.type, payload: true });
//   yield put({ type: setLoading.type, payload: false });
// }
//#endregion

function* getComments(action) {
  const state = yield select();
  const param = action.payload;
  const testID = param.testid ? param.testid : state.reply.testUid;
  const { success, error } = createActionString(action.type);

  const { data, status } = yield call(
    testingAPI.getReplyInfo,
    testID,
    param.timestamp
  );

  //로딩바 닫기
  if (state.common.loading)
    yield put({ type: setLoading.type, payload: false });

  if (status === SUCCESS) {
    if (data?.length > 0) {
      yield put({
        type: success,
        payload: { data, timestamp: param.timestamp },
      });
    } else {
      yield put({
        type: stopCallComments.type,
        payload: true,
      });
    }
  } else {
    //오류 화면 표시
    yield put({ type: setError.type, payload: true });
  }
}

function* setComments(action) {
  const state = yield select();
  const param = action.payload;
  const { data, status } = yield call(
    testingAPI.postComment,
    state.reply.testUid, //state.testing.current_testID,
    param
  );

  console.log("setComments", data, status);
  if (status === SUCCESS) {
    yield put({
      type: addOneComment.type,
      payload: data[0],
    });
  }
}

function* reportToComment(action) {
  const state = yield select();
  const param = action.payload;

  const { status } = yield call(
    testingAPI.reportComment,
    state.reply.testUid, //state.testing.current_testID,
    param
  );

  if (status === SUCCESS) {
    //data update for reportsCnt
  }
}

function* replyInformation() {
  yield takeLeading(getReplyInfo.type, getComments);
  yield takeLatest(submitOneComment.type, setComments);
  yield takeLeading(reportComment.type, reportToComment);
  yield takeLeading(moreReplyInfo.type, getComments);
}

export default function* replySaga() {
  yield all([fork(replyInformation)]);
}
