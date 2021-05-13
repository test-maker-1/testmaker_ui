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
      questions[questionIdx].options[idx] = option;
    },

    /* add empty data */
    addQuestion: ({ type, data: { questions, questionsCnt } }) => {
      questions.push(getQuestion(type));
      questionsCnt += 1;
    },
    addOption: ({ data: { questions } }, { payload }) => {
      questions[payload].options.push("");
    },
    addResult: ({ type, data: { results, resultsCnt } }) => {
      results.push(getResult(type));
      resultsCnt += 1;
    },

    /* add data */
    addTag: ({ tags }, { payload }) => {
      tags.push(payload);
    },

    /* delete */
    deleteTag: ({ tags }, { payload }) => {
      tags = tags.filter((tag) => tag !== payload);
    },
    deleteQuestion: ({ data: { questions, questionsCnt } }, { payload }) => {
      questions.splice(payload, 1);
      questionsCnt -= 1;
    },
    deleteOptionData: (
      { data: { questions } },
      { payload: { questionIdx, optionIdx } }
    ) => {
      questions[questionIdx].options.splice(optionIdx, 1);
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
