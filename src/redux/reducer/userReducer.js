import cookie from "react-cookies";
import { createSlice } from "@reduxjs/toolkit";
import { handleAsyncReducer, reducerUtils } from "../../utils/asyncUtils";

const prefix = "user";

const initialState = {
  user: reducerUtils.init(),
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
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      ({ type }) => {
        return type.includes("LogIn");
      },
      (state, action) => {
        if (action.type.includes("Success")) {
          cookie.save("token", action.payload.token);
          action.payload = action.payload.user;
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
  kakaoLogInSuccess,
} = user.actions;

export default user;
