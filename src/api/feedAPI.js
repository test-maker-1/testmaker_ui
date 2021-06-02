import { get } from "./instance";

export default class FeedAPI {
  static initFeed() {
    return get("/home");
  }

  static testsByTag({ tagName, lastTestUid }) {
    const [TAGNAME, LASTTESTUID] = [
      encodeURIComponent(tagName),
      encodeURIComponent(lastTestUid),
    ];
    return get(`/home?tag=${TAGNAME}&last=${LASTTESTUID}`);
  }
}
