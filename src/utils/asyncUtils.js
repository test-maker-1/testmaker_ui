import { call, put } from "redux-saga/effects";

export const createActionString = (type) => {
  return { success: `${type}Success`, error: `${type}Error` };
};

export const createPromiseSaga = (type, promiseCreator) => {
  const { success, error } = createActionString(type);

  return function* (action) {
    try {
      const response = yield call(promiseCreator, action.payload);
      yield put({
        type: success,
        payload: response
      });
    } catch (err) {
      yield put({
        type: error,
        payload: err.message,
        error: true
      });
    }
  };
};

export const reducerUtils = {
  init: () => ({
    data: null,
    loading: false,
    error: false
  }),

  loading: (prevData = null) => ({
    data: prevData,
    loading: true,
    error: false
  }),

  success: (data = null) => ({
    data: data,
    loading: false,
    error: false
  }),

  error: (error) => ({
    data: error,
    loading: false,
    error: true
  })
};
