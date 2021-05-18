import { createSlice } from "@reduxjs/toolkit";

const prefix = "common";

export const commonInitState = {
  headTitle: '',
};

const common = createSlice({
  name: prefix,
  initialState: commonInitState,
  reducer: {
    initCommonData: () => {
      return commonInitState.headTitle;
    },
  }
});

export const headTitleSelector = (state) => state.headTitle;

export default common;