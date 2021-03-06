import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "result";

const result = createSlice({
  name: prefix,
  initialState: initState.result,
  reducers: {
    getTestResultInfo: (state, { payload }) => {
      state.responseUid = payload;
    },
    getTestResultInfoSuccess: (state, { payload }) => {
      //console.log("updateTestResult!!!", payload);
      state = Object.assign(state, payload);

      if (payload.userTestResult) {
        state.currentResult = Object.assign(
          state.currentResult,
          payload.testResults.find((resultForm) => {
            return resultForm.title === payload.userTestResult;
          })
        );
      }
    },
    getTestResultInfoError: (state, { payload }) => {},
    getTestResult: (state, { payload: { resultID } }) => {
      // if (state.responseUid !== resultID) {
      // state.responseUid = testID;
    },
    shareResult: () => {},
    postFeedback: () => {},
  },
});

export const {
  getTestResultInfo,
  getTestResultInfoSuccess,
  getTestResultInfoError,
  getTestResult,
  shareResult,
  postFeedback,
} = result.actions;

export default result;
