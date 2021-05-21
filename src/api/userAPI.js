import { post } from "./instance";

export default class UserAPI {
  static kakaoLogIn(params) {
    return post(`/auth/login/kakao`, params);
  }
}
