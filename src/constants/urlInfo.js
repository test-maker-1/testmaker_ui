export const [
  home,
  login,
  test,
  testing,
  multi,
  mbti,
  weight,
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
  "test",
  "test-ing",
  "multi",
  "mbti",
  "weight",
  "pick-test",
  "preset",
  "edit/qna",
  "edit/result",
  "edit/detail",
  "replay",
  "preview",
  "release",
];

//https://www.notion.so/depromeet/Routing-URL-9a3efbefa3d84b679a23ea4a798a299f
export const seqTest = {
  [multi]: [picktest, preset, qna, result, detail, replay, release],
  [mbti]: [picktest, preset, qna, detail, replay, release],
  [weight]: [picktest, preset, result, qna, detail, replay, release],
};
