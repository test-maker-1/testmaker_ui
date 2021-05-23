import { get, post } from "./instance";

export default class UserAPI {
  static refreshToken() {
    return post("/auth/refresh");
  }
  static getMyInfo() {
    return get("/me");
  }
  // sns log in
  static kakaoLogIn(params) {
    return post("/auth/login/kakao", params);
  }
}
