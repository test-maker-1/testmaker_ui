import { createSlice } from "@reduxjs/toolkit";

// init state
export const initState = {
  feedLoading: false,
  feedError: false,

  // top 5 Tests
  top5Tests: null,

  // top 10 tags
  top10Tags: null,

  // tests By Tag
  testsByTagLoading: false,
  testsByTagError: false,
  testsByTag: null,
};

const feed = createSlice({
  name: "feed",
  initialState: initState,
  reducers: {
    // feed 첫 로딩
    initFeed: (state, action) => {
      state.feedLoading = true;
    },
    initFeedSuccess: (state, { payload: { top10Tags, top20Tests } }) => {
      state.feedLoading = false;
      state.top5Tests = top20Tests.slice(0, 6);
      state.top10Tags = top10Tags;
      state.testsByTag = top20Tests;
    },
    initFeedError: (state, action) => {
      state.feedLoading = false;
      state.feedError = true;
    },

    // 태그가 바뀌는 순간 요청 (기존 테스트들을 비워줘야함)
    changeTests: (state, { payload }) => {
      state.testsByTagLoading = true;
    },
    changeTestsSuccess: (state, { payload }) => {
      console.log(payload);
      state.testsByTagLoading = false;
      state.testsByTag = payload;
    },
    changeTestsError: (state, { payload }) => {
      state.testsByTagLoading = false;
      state.testsByTagError = true;
    },

    // 하나의 태그의 테스트 추가 요청 (무한 스크롤)
    updateTests: (state, { payload }) => {
      state.testsByTagLoading = true;
    },
    updateTestsSuccess: (state, { payload }) => {
      state.testsByTagLoading = false;
      state.testsByTag = [state.testsByTag, ...payload];
    },
    updateTestsError: (state, { payload }) => {
      state.testsByTagLoading = false;
      state.testsByTagError = true;
    },
  },
});

// action return
const { actions } = feed;

export const {
  initFeed,
  initFeedSuccess,
  initFeedError,
  changeTests,
  updateTests,
} = actions;

export default feed;
