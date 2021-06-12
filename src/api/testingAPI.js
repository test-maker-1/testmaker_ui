import { get, post, put } from "./instance";

export default class TestingAPI {
  /** TEST 정보 */
  static getTestInfo(uID) {
    return get(`/testing/${uID}/welcome`);
  }
  static getTesting(uID) {
    return get(`/testing/${uID}`);
  }
  static postTesting(uID, value) {
    return post(`/testing/${uID}/result`, { userAnswers: value });
  }
  /** Reply 정보 */
  static getReplyInfo(uID, timestamp) {
    return get(`/testing/${uID}/replies?last=${timestamp}`);
  }
  static postComment(uID, value) {
    return post(`/testing/${uID}/reply`, { reply: value });
  }
  static reportComment(uID, cID) {
    // PUT /testing/:testUid/reply/:replyID/report
    return put(`/testing/${uID}/reply/${cID}/report`);
  }
  /** Result 정보 */
  static getResultInfo(uID) {
    return get(`/testing/${uID}/result`);
  }
  static shareResultInfo(uID) {
    return put(`/testing/${uID}/sharing`);
  }
}
