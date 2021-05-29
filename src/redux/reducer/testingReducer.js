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
      state.testInfo.questions = testInfo;
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
      state.testInfo.questions = questions;
      state.testInfo.questsCnt = questions.length;
    },
    saveAnwerByStep: (state, { payload: { page, value } }) => {
      if (state.answers.values.length > page)
        state.answers.values[page] = value;
      else state.answers.values.push(value);
    },
    submitAnswer: (state, { paylaod }) => {
      state.answers.values = []; //init
    },
  },
});

export const {
  setTestID,
  updateTestInfo,
  getTestExam,
  updateTestExam,
  saveAnwerByStep,
  submitAnswer,
} = testing.actions;

export default testing;
