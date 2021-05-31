import { get } from "./instance";

export default class FeedAPI {
  static initFeed() {
    return get("/home");
  }

  static testsByTag({ tagName, lastTestUid }) {
    return get(encodeURI(`/home?tag=${tagName}&last=${lastTestUid}`));
  }
}
