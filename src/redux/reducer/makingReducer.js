import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/makingInitState";
import question from "../../constants/question";
import result from "../../constants/result";

const prefix = "making";

const making = createSlice({
  name: prefix,
  initialState: initState.common,

  reducers: {
    /* initialize */
    initCommonData: (state, action) => {
      return initState.common;
    },
    initTypeData: (state, { payload }) => {
      state.type = payload;
      state.data = initState[payload];
    },
    initQNA: (state, { payload }) => {
      // 여기서 질문, 결과 개수에 따라 빈 질문과 결과들 초기화 필요
    },

    /* update */
    updateCommonData: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    updateTypeData: (state, { payload: { key, value } }) => {
      state.data[key] = value;
    },

    /* add empty data */
    addQuestion: (state, { payload }) => {
      const { nextQuestionId, questions } = state.data;
      const emptyQuestion = question[payload](nextQuestionId);

      state.data.nextQuestionId += 1;
      questions.push(emptyQuestion);
    },
    addOption: (state, action) => {},
    addResult: (state, { payload }) => {
      const { nextResultId, results } = state.data;
      const emptyResult = result[payload](nextResultId);

      state.data.nextResultId += 1;
      results.push(emptyResult);
    },

    /* delete */
    deleteQuestion: (state, action) => {},
    deleteOption: (state, action) => {},
    deleteResult: (state, action) => {}
  }
});

/* initialize */
export const { initCommonData, initTypeData } = making.actions;
export const { updateCommonData, updateTypeData } = making.actions;

/* update */
export const { addQuestion, addResult } = making.actions;

export default making;
