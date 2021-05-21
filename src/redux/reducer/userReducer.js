import { createSlice } from "@reduxjs/toolkit";
import cookie from "react-cookies";
import { reducerUtils } from "../../utils/asyncUtils";

const prefix = "user";

const initialState = {
  user: reducerUtils.init(),
};

const user = createSlice({
  name: prefix,
  initialState,

  reducers: {
    kakaoLogIn: (state) => {
      const { data } = state;
      state.user = reducerUtils.loading(data);
    },
    kakaoLogInSuccess: (state, { payload }) => {
      const { user, token } = payload;
      cookie.save("token", token);
      state.user = reducerUtils.success(user);
    },
  }, // 추후 extraReducer로 중복 코드 제거할 수도
});

export const { kakaoLogIn } = user.actions;

export default user;
