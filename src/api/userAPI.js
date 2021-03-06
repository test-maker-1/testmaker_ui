import { get, post, put } from "./instance";

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
  // 참여 테스트
  static partTests({ num_elements, uid }) {
    if (uid) {
      return get(`/me/test/complete?n=${num_elements}&after=${uid}`);
    }
    return get(`/me/test/complete?n=${num_elements}`);
  }
  // 만든 테스트
  static madeTests({ num_elements, millis_timestamp }) {
    if (millis_timestamp) {
      return get(`/me/test/made?n=${num_elements}&after=${millis_timestamp}`);
    }
    return get(`/me/test/made?n=${num_elements}`);
  }
  // 임시 저장 테스트
  static tempSaveTests() {
    return get("me/test/saved");
  }
  // 프로필 업로드
  static uploadImg(form) {
    return post("/img", form);
  }
  // 프로필 변경
  static updateProfile(params) {
    return put("/me/profile-img", params);
  }
  // 닉네임 변경
  static updateNickname(params) {
    return put("/me/nickname", params);
  }
}
