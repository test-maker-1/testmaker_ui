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
    updateOptionData: (
      { data: { questions } },
      { payload: { questionIdx, idx, beforeOption, option } }
    ) => {
      if (beforeOption === questions[questionIdx].answer) {
        questions[questionIdx].answer = option;
      }
      questions[questionIdx].options[idx] = option;
    },

    /* add empty data */
    addQuestion: (state) => {
      const { questions } = state.data;
      const emptyQuestion = getQuestion(state.type);

      questions.push(emptyQuestion);
      state.data.questionsCnt += 1;
    },
    addOption: ({ data: { questions } }, { payload }) => {
      questions[payload].options.push("");
    },
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
    deleteQuestion: (state, { payload }) => {
      const { questions } = state.data;
      questions.splice(payload, 1);
      state.data.questionsCnt -= 1;
    },
    deleteOptionData: (state, { payload: { questionIdx, optionIdx } }) => {
      state.data.questions[questionIdx].options.splice(optionIdx, 1);
    },
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
  updateOptionData,
} = making.actions;

/* add */
export const { addTag, addQuestion, addResult, addOption } = making.actions;

/* delete */
export const { deleteTag, deleteQuestion, deleteOptionData } = making.actions;

export default making;
