import { get, post } from "./instance";

export default class MakingAPI {
  // get
  static getTestId(params) {
    return post("/makingTest", params);
  }
  static getTest(testId) {
    return get(`/makingTest/${testId}`);
  }
  // update or save
  static updateOnFeed(params) {
    const { testId, onFeed } = params;
    const feedParams = {
      onFeed,
    };
    return post(`/makingTest/feed/${testId}`, feedParams);
  }
  static saveTest(params) {
    return post(`/makingTest/${params.testId}`, params);
  }
  static submitTest(testId) {
    return post(`/makingTest/submit/${testId}`);
  }
}
