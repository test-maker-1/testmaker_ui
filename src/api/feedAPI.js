import { get, post } from "./instance";

export default class FeedAPI {
  static initFeed() {
    return get("/home");
  }

  static testsByTag({ tagName, lastTestUid }) {
    return get(`/home?tag=${tagName}&last=${lastTestUid}`);
  }
}
