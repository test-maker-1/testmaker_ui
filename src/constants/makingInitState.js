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
  coverImgPath: null, // 썸네일 편집

  tags: [], // string[]
  onFeed: true,
  optionalURL: "", // 홍보 URL (선택)
  step: null, // 테스트 제작 단계

  theme: "basic",
  data: {}, // type에 따라 내용 상이
};

/* 객관식 테스트 */
const multiple = {
  target: null, // 누구에게 공유하실건가요?

  questionsCnt: 6, // 질문 개수
  resultsCnt: 3, // 결과 개수
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
