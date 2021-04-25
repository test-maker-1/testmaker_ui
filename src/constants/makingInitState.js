/* 테스트 메이킹 공통 데이터 */
const common = {
  testId: null,
  type: "", // 테스트 종류 ex) "multiple" | "mbti" | "weight"
  testName: "",
  testDesc: "", // 테스트 소개
  thumbnail: null,

  tags: [],
  optionalURL: "", // 추가 홍보 URL
  private: false, // 테스트 공개 여부

  userId: "", // 테스트 메이커 ID
  data: {} // type에 따라 내용 상이
};

/* 객관식 테스트 */
const multiple = {
  target: null, // 누구에게 공유하실건가요?

  questionCnt: null, // 질문 개수 -> 난이도에 따르거나 직접 입력 가능
  resultCnt: null, // 결과 개수 -> 난이도에 따르거나 직접 입력 가능

  nextQuestionId: 0, // 다음에 추가될 질문 ID
  questions: [],

  nextResultId: 0, // 다음에 추가될 결과 ID
  results: []
};

/* 성격 테스트 */
const mbti = {};

/* 성향 테스트 */
const weight = {};

const initState = {
  common,
  multiple,
  mbti,
  weight
};

export default initState;
