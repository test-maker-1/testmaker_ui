import { get, post } from "./instance";

export default class RegisterAPI {
  // 이메일 인증번호
  static emailAuth(params) {
    return post("/auth/email_validation/request", params);
  }

  // 닉네임 중복
  static nickNameCheck() {
    // no 구현
    return;
  }

  // 회원가입 요청
  static signUp(params) {
    return post("/auth/sign_up/email", params);
  }
}
