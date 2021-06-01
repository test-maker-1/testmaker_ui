import { get, post, remove } from "./instance";

export default class MakingAPI {
  // get
  static getTestId(params) {
    return post("/makingTest", params);
  }
  static getTest(testId) {
    return get(`/makingTest/${testId}`);
  }
  static getQuestionPreset(target) {
    const questCnt = 1;
    return get(`/makingTest/preset?target=${target}&questCnt=${questCnt}`);
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
  // add
  static addQuestionPreset(params) {
    return post("/makingTest/addPreset", params);
  }
  // image
  static uploadImg(form) {
    return post("/img", form);
  }
  static deleteImg(img) {
    return remove(`/img/single?path=${img}`);
  }
}
