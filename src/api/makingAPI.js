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
    return post(`/makingTest/onFeed/${testId}`, feedParams);
  }
  static saveTest(params) {
    return post(`/makingTest/${params.testId}`, params);
  }
  static submitTest(testId) {
    return post(`/makingTest/submit/${testId}`);
  }
  // image
  static uploadImg(form) {
    return post("/img", form);
  }
  static deleteImg(img) {
    return post(`/img/single?path=${img}`);
  }
}
