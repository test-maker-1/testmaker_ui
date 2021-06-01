import preset from "./preset";

const { multiple: multiplePreset } = preset;

/* 테스트 메이킹 공통 데이터 */
const common = {
  maker: {
    name: null,
    userUid: null,
  },

  testId: null,
  type: null, // ex) "multiple" | "mbti" | "weight"
  title: "",
  description: "",
  coverImg: null, // 썸네일

  tags: [], // string[]
  onFeed: false,
  optionalURL: "", // 홍보 URL (선택)
  step: "preset", // 테스트 제작 단계

  theme: "basic",
  data: {}, // type에 따라 내용 상이
};

/* 객관식 테스트 */
const multiple = {
  isRankMode: false,
  top: 5,
  target: "friends", // 누구에게 공유하실건가요?

  nextQuestionId: multiplePreset.questionsCnt, // 다음 질문 Id -> 식별 위해 프론트에서만 사용
  nextResultId: multiplePreset.resultsCnt, // 다음 결과 Id -> 식별 위해 프론트에서만 사용

  questionsCnt: multiplePreset.questionsCnt, // 질문 개수
  resultsCnt: multiplePreset.resultsCnt, // 결과 개수
  totalPoints: 6,

  questions: [],
  results: [],
};

/* 성격 테스트 */
const mbti = {};

/* 성향 테스트 */
const weight = {};

const initState = {
  common,
  multiple,
  mbti,
  weight,
};

export default initState;
