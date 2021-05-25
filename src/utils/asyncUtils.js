import cookie from "react-cookies";
import { call, put } from "redux-saga/effects";
import UserAPI from "../api/userAPI";

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

export const callWithToken = async (promiseCreator, params = null) => {
  const { data, status } = await promiseCreator(params);

  if (status === ERROR) {
    if (data.code === 403) {
      // aceess token 만료 시 재발급
      const {
        data: tokenData,
        status: tokenStatus,
      } = await UserAPI.refreshToken();

      if (tokenStatus === SUCCESS) {
        // 토큰 재발급 후 다시 요청
        cookie.save("token", tokenData.token);
        const { data: recallData, recallStatus } = await promiseCreator(params);
        return { data: recallData, status: recallStatus };
      }
      // 토큰 재발급 실패 시 error return
      return { data: tokenData, status: tokenStatus };
    }
    // token 만료 에러 아닐 경우 별도 처리 없이 return
    return { data, status };
  }
  // 요청 성공 status === SUCCESS
  return { data, status };
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

  error: (error = null) => ({
    data: {
      code: error.code,
      name: error.name,
    },
    status: ERROR,
  }),
};
