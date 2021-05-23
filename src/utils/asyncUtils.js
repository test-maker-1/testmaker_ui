import { call, put } from "redux-saga/effects";

export const [INIT, LOADING, SUCCESS, ERROR] = [
  "init",
  "loading",
  "success",
  "error",
];

/* type: string; -> action.type */
export const createActionString = (type) => {
  return { success: `${type}Success`, error: `${type}Error` };
};

export const handleAsyncReducer = (action, prevData = null, callback = {}) => {
  const { type, payload } = action;
  const { onSuccess = null, onError = null, onLoading = null } = callback;

  if (type.includes("Success")) {
    if (onSuccess) onSuccess();
    return reducerUtils.success(payload);
  }
  if (type.includes("Error")) {
    if (onError) onError();
    return reducerUtils.error(payload);
  }

  if (onLoading) onLoading();
  return reducerUtils.loading(prevData);
};

/*
 * type: string; -> action.type
 * promiseCreato: api function; ex) UserAPI.getMyInfo
 */
export const createPromiseSaga = (type, promiseCreator) => {
  const { success, error } = createActionString(type);

  return function* (action) {
    const { data, status } = yield call(promiseCreator, action.payload);

    if (status === SUCCESS) {
      yield put({
        type: success,
        payload: data,
      });
    } else {
      yield put({
        type: error,
        payload: data,
      });
    }
  };
};

export const reducerUtils = {
  init: () => ({
    data: null,
    status: INIT,
  }),

  loading: (prevData = null) => ({
    data: prevData,
    status: LOADING,
  }),

  success: (data = null) => ({
    data: data,
    status: SUCCESS,
  }),

  error: (msg) => ({
    data: msg,
    status: ERROR,
  }),
};
