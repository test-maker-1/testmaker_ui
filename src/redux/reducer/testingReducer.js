import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "testing";

const testing = createSlice({
  name: prefix,
  initialState: initState.testing,
  reducers: {
    //#region : welcome
    getTestInfo: (state, { payload }) => {
      state.current_testID = payload;
    },
    getTestInfoSuccess: (state, { payload }) => {
      state.finish = false;
      state.answers.values = [];
      state.testInfo = payload.testDoc;
      state.recent3replies = payload.recent3replies;
    },
    getTestInfoError: (state, { payload }) => {
      state.finish = false;
      state.answers.values = [];
      state.current_testID = null;
    },
    //#endregion
    updateTestInfo: (state, { payload: { testInfo, recent3replies } }) => {
      state.testInfo = testInfo;
      state.recent3replies = recent3replies;
    },
    getTestExam: (state, { payload }) => {
      if (state.current_testID !== payload) {
        console.log("현재 페이지가 아님!");
        state.current_testID = payload;
      }
      state.answers.type = "multi"; //testType
    },
    getTestExamSuccess: (state, { payload: { questions } }) => {
      state.questions = questions || [];
      state.questsCnt = state.questions.length;
    },
    getTestExamError: (state, { payload }) => {},
    saveAnwerByStep: (state, { payload: { page, value, isIng } }) => {
      if (!isIng) state.finish = true;

      if (state.answers.values.length > page)
        state.answers.values[page] = value;
      else state.answers.values.push(value);
    },
    saveResult: (state, { payload }) => {
      state.questsCnt = 0;
      state.questions = [];
    },
  },
});

export const {
  getTestInfo,
  getTestInfoSuccess,
  getTestInfoError,
  updateTestInfo,
  getTestExam,
  getTestExamSuccess,
  getTestExamError,
  saveAnwerByStep,
  saveResult,
} = testing.actions;

export default testing;
