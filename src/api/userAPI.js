import { get, post } from "./instance";

export default class UserAPI {
  static refreshToken() {
    return post("/auth/refresh");
  }
  static getMyInfo() {
    return get("/me");
  }
  // sign up
  static signUpEmail(params) {
    return post("/auth/sign_up/email", params);
  }
  // sns log in
  static kakaoLogIn(params) {
    return post("/auth/login/kakao", params);
  }
  // log out
  static logOut() {
    return get("/auth/logout");
  }
}
