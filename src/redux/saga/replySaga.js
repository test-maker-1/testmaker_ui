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
  updateComment,
  deleteComment,
} from "../reducer/replyReducer";
import { setLoading, setError } from "../reducer/commonReducer";
import testingAPI from "../../api/testingAPI";
import { createActionString, SUCCESS } from "../../utils/asyncUtils"; //createPromiseSaga

//#region >> 댓글 정보 불러오기 / 입력
function* getComments(action) {
  const state = yield select();
  const param = action.payload;
  const testID = param.testid ? param.testid : state.reply.testUid;
  const { success } = createActionString(action.type);

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

  if (status === SUCCESS) {
    yield put({
      type: addOneComment.type,
      payload: data[0],
    });
  }
}
//#endregion

//#region >> 댓글 신고
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
//#endregion

//#region >> 댓글 수정
function* updateComments(action) {
  const state = yield select();
  const param = action.payload;

  yield call(
    testingAPI.updateComment,
    state.reply.testUid, //state.testing.current_testID,
    param.comment_id,
    param.value
  );
}
//#endregion

//#region >> 댓글 삭제
function* deleteComments(action) {
  const state = yield select();
  const param = action.payload;

  yield call(
    testingAPI.deleteComment,
    state.reply.testUid, //state.testing.current_testID,
    param
  );
}
//#endregion

function* replyInformation() {
  yield takeLatest(getReplyInfo.type, getComments);
  yield takeLeading(submitOneComment.type, setComments);
  yield takeLeading(reportComment.type, reportToComment);
  yield takeLeading(moreReplyInfo.type, getComments);
  yield takeLeading(updateComment.type, updateComments);
  yield takeLeading(deleteComment.type, deleteComments);
}

export default function* replySaga() {
  yield all([fork(replyInformation)]);
}
