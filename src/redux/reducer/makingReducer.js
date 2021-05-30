import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/makingInitState";
import question from "../../constants/question";
import option from "../../constants/option";
import result from "../../constants/result";

const logOutActions = ["logOutSuccess", "logOutError", "logInError"];

const prefix = "making";

const making = createSlice({
  name: prefix,
  initialState: initState.common,

  reducers: {
    /* initialize */
    initCommonData: (state, { payload = false }) => {
      return payload
        ? { ...initState.common, maker: { ...state.maker } }
        : initState.common;
    },
    initTypeData: (state, { payload: { type, questions, results } }) => {
      state.type = type;
      state.data = { ...initState[type] };
      state.data.questions = [...questions];
      state.data.results = [...results];
    },
    initResultsInfo: ({ data }, { payload: { totalPoints, results } }) => {
      data.totalPoints = totalPoints;
      data.results = [...results];
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
    updateResultData: ({ data }, { payload: { key, value, idx } }) => {
      data.results[idx][key] = value;
    },

    /* add empty data */
    addQuestion: (state) => {
      const {
        type,
        data: { nextQuestionId },
      } = state;

      state.data.questions.push(question[type](nextQuestionId));
      state.data.nextQuestionId += 1;
      state.data.questionsCnt += 1;
    },
    addOption: (state, { payload }) => {
      const { questions } = state.data;
      const emptyOption = option(questions[payload].nextOptionId);

      state.data.questions[payload].options.push(emptyOption);
      state.data.questions[payload].nextOptionId += 1;
    },
    addResult: (state) => {
      const {
        type,
        data: { nextResultId },
      } = state;

      state.data.results.push(result[type](nextResultId));
      state.data.nextResultId += 1;
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

  extraReducers: (builder) => {
    // 로그인/로그아웃 시 making state에 유저 정보 저장/삭제
    builder.addMatcher(
      ({ type }) => {
        return type.toLowerCase().includes("log");
      },
      (state, action) => {
        if (action.type.includes(logOutActions)) {
          return initState.common;
        }

        if (action.type.includes("LogInSuccess")) {
          const { nickname: name, uid: userUid } = action.payload;
          state.maker = { name, userUid };
        }
      }
    );
  },
});

/* initialize */
export const { initCommonData, initTypeData, initResultsInfo } = making.actions;

/* update */
export const {
  updateCommonData,
  updateTypeData,
  updateQuestionData,
  updateOptionData,
  updateResultData,
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
