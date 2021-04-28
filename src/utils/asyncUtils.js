import { call, put } from "redux-saga/effects";

export const [INIT, LOADING, SUCCESS, ERROR] = [
  "init",
  "loading",
  "success",
  "error"
];

/* type: string; -> action.type */
export const createActionString = (type) => {
  return { success: `${type}Success`, error: `${type}Error` };
};

/*
 * type: string; -> action.type
 * promiseCreato: api function; ex) UserAPI.getMyInfo
 */
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
        payload: err.message
      });
    }
  };
};

export const reducerUtils = {
  init: () => ({
    data: null,
    status: INIT
  }),

  loading: (prevData = null) => ({
    data: prevData,
    status: LOADING
  }),

  success: (data = null) => ({
    data: data,
    status: SUCCESS
  }),

  error: (msg) => ({
    data: msg,
    status: ERROR
  })
};
