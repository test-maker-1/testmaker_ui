import { createSlice } from "@reduxjs/toolkit";

const prefix = "common";

export const commonInitState = {
  headTitle: "",
  loading: false,
  isError: null,
};

const common = createSlice({
  name: prefix,
  initialState: commonInitState,
  reducers: {
    initCommonData: () => {
      return commonInitState.headTitle;
    },
    setHeadTitle: (state, { payload }) => {
      state.headTitle = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.isError = payload;
    },
  },
});

//actions
export const { setHeadTitle, setLoading, setError } = common.actions;

export default common;
