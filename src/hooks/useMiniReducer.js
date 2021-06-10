import { useReducer } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { reducerUtils, SUCCESS, INIT, LOADING } from "../utils/asyncUtils";

const initState = {
  ...reducerUtils.init(),
};

const mini = createSlice({
  name: "mini",
  reducers: {
    reqAPI: (state) => {
      return reducerUtils.loading(state.data);
    },
    reqAPISuccess: (state, { payload }) => {
      return reducerUtils.success(payload);
    },
    reqAPIError: (state, action) => {
      return reducerUtils.error(action.payload);
    },
  },
});

const { reqAPI, reqAPISuccess, reqAPIError } = mini.actions;
const miniReducer = mini.reducer;

const useMiniReducer = () => {
  const [state, dispatch] = useReducer(miniReducer, initState);

  const loading = [LOADING, INIT].includes(state.status); // 요청 중
  const success = state.status === SUCCESS && state.data !== null; // 요청 완료

  return {
    state,
    loading,
    success,
    request: () => dispatch(reqAPI()),
    requestSuccess: (payload = null) => dispatch(reqAPISuccess(payload)),
    requestError: (payload = null) => dispatch(reqAPIError(payload)),
  };
};

export default useMiniReducer;
