import { createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../utils/asyncUtils";

const prefix = "register";

const initialState = {
  email: reducerUtils.init(),
  // password: reducerUtils.init(),
  // profile: reducerUtils.init(),
  nickName: reducerUtils.init(),
  signUp: reducerUtils.init(),
};

const register = createSlice({
  name: prefix,
  initialState,
  reducers: {
    emailAuth: (state, action) => {
      // state.email = reducerUtils.loading();
    },
    emailAuthSuccess: (state, { payload }) => {
      state.email = reducerUtils.success(payload);
    },
    emailAuthError: (state, { payload }) => {
      state.email = reducerUtils.error(payload);
    },

    // passwordSetting: (state, action) => {
    //   state.password= reducerUtils.loading();
    // },
    // passwordSettingSuccess: (state, { payload })=>{
    //   state.password=reducerUtils.success(payload);
    // },
    // passwordSettingError: (state, { payload })=>{
    //   state.password=reducerUtils.error(payload);
    // },

    // profileSetting: (state, action) => {
    //   state.profile= reducerUtils.loading();
    // },
    // profileSettingSuccess: (state, { payload })=>{
    //   state.profile=reducerUtils.success(payload);
    // },
    // profileSettingError: (state, { payload })=>{
    //   state.profile=reducerUtils.error(payload);
    // },

    nickNameCheck: (state, action) => {
      state.nickName = reducerUtils.loading();
    },
    nickNameCheckSuccess: (state, { payload }) => {
      state.nickName = reducerUtils.success(payload);
    },
    nickNameCheckError: (state, { payload }) => {
      state.nickName = reducerUtils.error(payload);
    },

    signUp: (state, action) => {
      state.signUp = reducerUtils.loading();
    },
    signUpSuccess: (state, { payload }) => {
      state.signUp = reducerUtils.success(payload);
    },
    signUpError: (state, { payload }) => {
      state.signUp = reducerUtils.error(payload);
    },
  },
});

// action return
const { actions } = register;

export const { emailAuth, nickNameCheck, signUp } = actions;

export default register;
