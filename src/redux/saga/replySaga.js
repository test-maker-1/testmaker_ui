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
} from "../reducer/replyReducer";
import testingAPI from "../../api/testingAPI";
import { SUCCESS } from "../../utils/asyncUtils";

function* getComments(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getReplyInfo, param);

  console.log("getComments", data, status);
  if (status === SUCCESS) {
    // yield put({
    //   type: addReplyInfo.type,
    //   payload: {},
    // });
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
      payload: data,
    });
  }
}

function* replyInformation() {
  yield takeLeading(getReplyInfo.type, getComments);
  yield takeLatest(submitOneComment.type, setComments);
}

export default function* replySaga() {
  yield all([fork(replyInformation)]);
}
