import { get } from "./instance";

export default class UserAPI {
  static getMyInfo(userUID) {
    return get(`/get/me/${userUID}`);
  }
}
