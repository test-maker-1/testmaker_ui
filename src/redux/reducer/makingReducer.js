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
    initCommonData: () => {
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
      const { questions } = state.data;
      const emptyQuestion = question[payload];
      questions.push(emptyQuestion);
    },
    addOption: (state, action) => {},
    addResult: (state, { payload }) => {
      const { results } = state.data;
      const emptyResult = result[payload];
      results.push(emptyResult);
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

/* initialize*/
export const { initCommonData, initTypeData } = making.actions;

/* update */
export const { updateCommonData, updateTypeData } = making.actions;

/* add */
export const { addTag, addQuestion, addResult } = making.actions;

/* delete */
export const { deleteTag } = making.actions;

export default making;
