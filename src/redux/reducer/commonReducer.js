import { createSlice } from "@reduxjs/toolkit";

const prefix = "common";

export const commonInitState = {
  headTitle: "",
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
  },
});

export const headTitleSelector = (state) => state.headTitle;

export const { setHeadTitle } = common.actions;

export default common;
