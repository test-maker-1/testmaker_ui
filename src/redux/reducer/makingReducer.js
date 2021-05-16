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
    updateTypeData: ({ data }, { payload: { key, value } }) => {
      data[key] = value;
    },
    updateQuestionData: ({ data }, { payload: { key, value, idx } }) => {
      data.questions[idx][key] = value;
    },
    updateOptionData: (
      { data: { questions } },
      { payload: { questionIdx, idx, beforeOption, option } }
    ) => {
      if (beforeOption === questions[questionIdx].answer) {
        questions[questionIdx].answer = option;
      }
      questions[questionIdx].options[idx].name = option;
    },

    /* add empty data */
    addQuestion: (state) => {
      state.data.questions.push(getQuestion(state.type));
      state.data.questionsCnt += 1;
    },
    addOption: ({ data: { questions } }, { payload }) => {
      questions[payload].options.push({ name: "" });
    },
    addResult: (state) => {
      state.data.results.push(getResult(state.type));
      state.data.resultsCnt += 1;
    },

    /* add data */
    addTag: ({ tags }, { payload }) => {
      tags.push(payload);
    },

    /* delete */
    deleteTag: ({ tags }, { payload }) => {
      tags = tags.filter((tag) => tag !== payload);
    },
    deleteQuestion: (state, { payload }) => {
      state.data.questions.splice(payload, 1);
      state.data.questionsCnt -= 1;
    },
    deleteOptionData: (
      { data: { questions } },
      { payload: { questionIdx, optionIdx } }
    ) => {
      questions[questionIdx].options.splice(optionIdx, 1);
    },
    deleteResult: (state, { payload }) => {
      state.data.results.splice(payload, 1);
      state.data.resultsCnt -= 1;
    },
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
export const {
  deleteTag,
  deleteQuestion,
  deleteOptionData,
  deleteResult,
} = making.actions;

export default making;
