import { post } from "./instance";

export default class MakingAPI {
  static getTestId(params) {
    return post("/makingTest", params);
  }
}
