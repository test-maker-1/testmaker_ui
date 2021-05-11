import { createSlice } from "@reduxjs/toolkit";
import { getQuestion, getResult } from "../../utils/constHandler";
import initState from "../../constants/makingInitState";

const prefix = "making";

const making = createSlice({
  name: prefix,
  initialState: initState.common,

  reducers: {
    /* initialize */
    initCommonData: () => {
      return initState.common;
    },
    initTypeData: (state, { payload: { type, questions, results } }) => {
      state.type = type;
      state.data = initState[type];
      state.data.questions = [...questions];
      state.data.results = [...results];
    },

    /* update */
    updateCommonData: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    updateTypeData: (state, { payload: { key, value } }) => {
      state.data[key] = value;
    },
    updateQuestionData: (state, { payload: { key, value, idx } }) => {
      state.data.questions[idx][key] = value;
    },

    /* add empty data */
    addQuestion: (state) => {
      const { questions } = state.data;
      const emptyQuestion = getQuestion(state.type);

      questions.push(emptyQuestion);
      state.data.questionsCnt += 1;
    },
    addOption: (state, action) => {},
    addResult: (state) => {
      const { results } = state.data;
      const emptyResult = getResult(state.type);

      results.push(emptyResult);
      state.data.resultsCnt += 1;
    },

    /* add data */
    addTag: ({ tags }, { payload }) => {
      tags.push(payload);
    },

    /* delete */
    deleteTag: (state, { payload }) => {
      const { tags } = state;
      state.tags = tags.filter((tag) => tag !== payload);
    },

    deleteQuestion: (state, action) => {},
    deleteOption: (state, action) => {},
    deleteResult: (state, action) => {},
  },
});

/* initialize */
export const { initCommonData, initTypeData } = making.actions;

/* update */
export const {
  updateCommonData,
  updateTypeData,
  updateQuestionData,
} = making.actions;

/* add */
export const { addTag, addQuestion, addResult } = making.actions;

/* delete */
export const { deleteTag } = making.actions;

export default making;
