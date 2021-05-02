import { multiple, mbti, weight } from "./Enum";

export const [
  home,
  login,
  test,
  testing,
  picktest,
  preset,
  qna,
  result,
  detail,
  replay,
  preview,
  release,
] = [
  "",
  "login",
  "test",
  "test-ing",
  "pick-test",
  "preset",
  "edit/qna",
  "edit/result",
  "edit/detail",
  "replay",
  "preview",
  "release",
];

// https://www.notion.so/depromeet/Routing-URL-9a3efbefa3d84b679a23ea4a798a299f
export const seqTest = {
  [multiple]: [picktest, preset, qna, result, detail, replay, release],
  [mbti]: [picktest, preset, qna, detail, replay, release],
  [weight]: [picktest, preset, result, qna, detail, replay, release],
};
