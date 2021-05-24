import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import registerSaga from "./registerSaga";

export function* rootSaga() {
  /* redux-saga의 effects */
  /* 
    all : 배열 안의 여러 사가를 동시에 실행
    fork : 비동기 함수 호출
    call : 동기 함수 호출
    take : 액션 감시, 일회용.. 그래서 while(true)와 사용! 하지만 동기적으로 동작
    takeEvery : while(true){...take...} => takeEvery를 사용하여 비동기로 동작, 클릭 실수를 두번했을 때 두번 실행됨
    takeLatest : 클릭 실수를 두번했을 때, 첫번째 클릭을 무시하고 마지막 클릭만(이미 완료된 것은 두고 다음 것을 실행, 하지만 완료되지 않은 것이 있으면 없애버림) !, 요청을 취소하는 것이 아니라 응답에서 취소
    throttle : 요청도 시간을 제한
    put : redux의 dispatch 역할
  */

  yield all([fork(userSaga), fork(registerSaga)]);
}
