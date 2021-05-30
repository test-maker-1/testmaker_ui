import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "testing";

const testing = createSlice({
  name: prefix,
  initialState: initState.testing,
  reducers: {
    setTestID: (state, { payload }) => {
      state.current_testID = payload;
    },
    updateTestInfo: (state, { payload: { testInfo, recent3replies } }) => {
      state.testInfo = testInfo;
      state.recent3replies = recent3replies;
    },
    getTestExam: (state, { payload: { testID, testType } }) => {
      if (state.current_testID !== testID) {
        console.log("현재 페이지가 아님!");
        state.current_testID = testID;
      }
      state.answers.type = "multi"; //testType
    },
    updateTestExam: (state, { payload: { questions } }) => {
      state.questions = questions;
      state.questsCnt = questions.length;
    },
    saveAnwerByStep: (state, { payload: { page, value } }) => {
      if (state.answers.values.length > page)
        state.answers.values[page] = value;
      else state.answers.values.push(value);
    },
    saveResult: (state, { paylaod }) => {
      console.log(paylaod);
      // state.result = {
      //   isRankMode,
      //   responseUid,
      //   userTestResult,
      //   repliesCnt,
      //   recent3Replies,
      // }; //init
    },
  },
});

export const {
  setTestID,
  updateTestInfo,
  getTestExam,
  updateTestExam,
  saveAnwerByStep,
  saveResult,
} = testing.actions;

export default testing;
