import cookie from "react-cookies";
import { createSlice } from "@reduxjs/toolkit";
import { handleAsyncReducer, reducerUtils } from "../../utils/asyncUtils";
import { PARTTEST } from "../../constants/Enum";

const prefix = "user";

const initialState = {
  user: reducerUtils.init(),

  selectedTab: PARTTEST,
  tabTestsLoading: false,
  tabTestsError: false,
  tabTests: [],
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

    // 탭이 바뀌는 순간 요청
    setSelecteTab: (state, { payload }) => {
      state.selectedTab = payload;
    },

    // 참여 테스트
    partTests: (state) => {
      state.tabTestsLoading = true;
    },
    partTestsSuccess: (state, { payload }) => {
      state.tabTestsLoading = false;
      state.tabTests = payload;
    },
    partTestsError: (state) => {
      state.tabTestsLoading = false;
      state.tabTestsError = true;
    },

    // 만든 테스트
    madeTests: (state) => {
      state.tabTestsLoading = true;
    },
    madeTestsSuccess: (state, { payload }) => {
      state.tabTestsLoading = false;
      state.tabTests = payload;
    },
    madeTestsError: (state) => {
      state.tabTestsLoading = false;
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
  tempSaveTests,
} = user.actions;

export default user;
