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
    // log out
    logOut: () => {
      cookie.remove("token");
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      ({ type }) => {
        return type.includes(prefix);
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

export const { initUserInfo, checkLogIn, kakaoLogIn, logOut } = user.actions;

export default user;
