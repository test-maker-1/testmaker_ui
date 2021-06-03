import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "result";

const result = createSlice({
  name: prefix,
  initialState: initState.result,
  reducers: {
    setTestResultID: (state, { payload }) => {
      state.responseUid = payload;
    },
    updateTestResult: (state, { payload }) => {
      console.log("updateTestResult", payload);
      state = Object.assign(state, payload);

      if (payload.userTestResult) {
        state.currentResult = payload.testResults.find((resultForm) => {
          return resultForm.title === payload.userTestResult;
        });
      }
    },
    getTestResult: (state, { payload: { resultID } }) => {
      // if (state.responseUid !== resultID) {
      // state.responseUid = testID;
    },
  },
});

export const { setTestResultID, updateTestResult, getTestResult } =
  result.actions;

export default result;
