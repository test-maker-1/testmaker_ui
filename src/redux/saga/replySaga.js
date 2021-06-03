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
  addReplyInfo,
  submitOneComment,
  addOneComment,
  reportComment,
  moreReplyInfo,
  stopCallComments,
} from "../reducer/replyReducer";
import testingAPI from "../../api/testingAPI";
import { SUCCESS } from "../../utils/asyncUtils";

function* getComments(action) {
  const state = yield select();
  const param = action.payload;
  const testID = param.testid ? param.testid : state.reply.testUid;
  const { data, status } = yield call(
    testingAPI.getReplyInfo,
    testID,
    param.timestamp
  );

  console.log("getComments", data, status);
  if (status === SUCCESS) {
    if (data?.length > 0) {
      yield put({
        type: addReplyInfo.type,
        payload: data,
      });
    } else {
      yield put({
        type: stopCallComments.type,
        payload: true,
      });
    }
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
