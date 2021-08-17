import { createSlice } from "@reduxjs/toolkit";

const prefix = "common";

export const commonInitState = {
  headTitle: "",
  loading: false,
  isError: null,
  query: "",
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
    setQuery: (state, { payload }) => {
      state.query = payload;
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
export const { setHeadTitle, setQuery, setLoading, setError } = common.actions;

export default common;
