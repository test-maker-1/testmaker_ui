import cookie from "react-cookies";
import { createSlice } from "@reduxjs/toolkit";
import { handleAsyncReducer, reducerUtils } from "../../utils/asyncUtils";
import { PARTTEST } from "../../constants/Enum";

const prefix = "user";

const initialState = {
  user: reducerUtils.init(),

  selectedTab: PARTTEST,
  moreTabTestsLoading: false,
  tabTestsLoading: false,
  tabTestsError: false,
  tabTests: [],
  tabTestsLast: null,
  // 무한 스크롤 stop
  isStop: false,

  updateUserLoading: false,
};

const user = createSlice({
  name: prefix,
  initialState,

  reducers: {
    initUserInfo: (state) => {
      state.user = reducerUtils.init();
    },
    // log in
    checkLogIn: () => {},
    kakaoLogIn: () => {},
    // log out
    logOut: () => {
      cookie.remove("token");
    },

    // 마이페이지 유저 정보 업뎃
    getUserInfo: (state) => {
      state.updateUserLoading = true;
      // state.user = reducerUtils.loading(state.user.data);
    },
    getUserInfoSuccess: (state, { payload }) => {
      state.updateUserLoading = false;
      state.user = reducerUtils.success(payload);
    },
    getUserInfoError: (state, { payload }) => {
      state.updateUserLoading = false;
      state.user = reducerUtils.error(payload);
    },

    // 탭이 바뀌는 순간 요청
    setSelecteTab: (state, { payload }) => {
      state.isStop = false;
      state.selectedTab = payload;
    },

    // 참여 테스트
    partTests: (state) => {
      state.tabTestsLoading = true;
    },
    partTestsSuccess: (state, { payload }) => {
      state.tabTestsLoading = false;
      state.tabTests = payload;
      state.tabTestsLast = state.tabTests[state.tabTests.length - 1].uid;
    },
    partTestsError: (state) => {
      state.tabTestsLoading = false;
      state.tabTestsError = true;
    },

    // 참여 테스트 (무한 스크롤)
    updatePartTests: (state) => {
      state.moreTabTestsLoading = true;
    },
    updatePartTestsSuccess: (state, { payload }) => {
      if (payload.length === 0) state.isStop = true;
      else state.isStop = false;

      state.moreTabTestsLoading = false;
      state.tabTests.push(...payload);
      state.tabTestsLast = state.tabTests[state.tabTests.length - 1].uid;
    },
    updatePartTestsError: (state) => {
      state.moreTabTestsLoading = false;
      state.tabTestsError = true;
    },

    // 만든 테스트
    madeTests: (state) => {
      state.tabTestsLoading = true;
    },
    madeTestsSuccess: (state, { payload }) => {
      state.tabTestsLoading = false;
      state.tabTests = payload;
      state.tabTestsLast = state.tabTests[state.tabTests.length - 1].createAt;
    },
    madeTestsError: (state) => {
      state.tabTestsLoading = false;
      state.tabTestsError = true;
    },

    // 만든 테스트 (무한 스크롤)
    updateMadeTests: (state) => {
      state.moreTabTestsLoading = true;
    },
    updateMadeTestsSuccess: (state, { payload }) => {
      if (payload.length === 0) state.isStop = true;
      else state.isStop = false;

      state.moreTabTestsLoading = false;
      state.tabTests.push(...payload);
      state.tabTestsLast = state.tabTests[state.tabTests.length - 1].createAt;
    },
    updateMadeTestsError: (state) => {
      state.moreTabTestsLoading = false;
      state.tabTestsError = true;
    },

    // 임시저장테스트
    tempSaveTests: (state) => {
      state.tabTestsLoading = true;
    },
    tempSaveTestsSuccess: (state, { payload }) => {
      state.tabTestsLoading = false;
      state.tabTests = payload;
    },
    tempSaveTestsError: (state) => {
      state.tabTestsLoading = false;
      state.tabTestsError = true;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      ({ type }) => {
        return type.toLowerCase().includes("log");
      },
      (state, action) => {
        if (action.type.includes("LogInSuccess")) {
          cookie.save("token", action.payload.token);
          action.payload = action.payload.user;
        }
        if (action.type.includes("logOut")) {
          action.payload = null;
        }

        state.user = handleAsyncReducer(action, state.user.data);
      }
    );
  },
});

export const {
  initUserInfo,
  checkLogIn,
  kakaoLogIn,
  logOut,
  setSelecteTab,
  partTests,
  madeTests,
  updatePartTests,
  updateMadeTests,
  tempSaveTests,
  getUserInfo,
} = user.actions;

export default user;
