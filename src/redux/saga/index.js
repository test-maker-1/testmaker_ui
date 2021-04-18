import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userSaga from './userSaga';

export const rootReducer = combineReducers({ userReducer })

export function* rootSaga() {
  //all 은 배열 안의 여러 사가를 동시에 실행
  yield all([userSaga()]); 
}
