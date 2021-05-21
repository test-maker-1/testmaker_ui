import { post } from "./instance";

export default class UserAPI {
  static kakaoSignUp(params) {
    return post(`/auth/sign_up/kakao`, params);
  }

  static kakaoLogIn(params) {
    return post(`/auth/login/kakao`, params);
  }
}
