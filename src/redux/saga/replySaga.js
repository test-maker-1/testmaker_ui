import {
  take,
  select,
  call,
  put,
  fork,
  all,
  takeLeading,
} from "redux-saga/effects";
import { getReplyInfo, addReplyInfo } from "../reducer/replyReducer";
import testingAPI from "../../api/testingAPI";
import { SUCCESS } from "../../utils/asyncUtils";

function* getComments(action) {
  const param = action.payload;
  const { data, status } = yield call(testingAPI.getReplyInfo, param);

  console.log("getComments", data, status);
  if (status === SUCCESS) {
    yield put({
      type: addReplyInfo.type,
      payload: {},
    });
  }
}

function* getReplyInformation() {
  yield takeLeading(getReplyInfo.type, getComments);
}

export default function* replySaga() {
  yield all([fork(getReplyInformation)]);
}
