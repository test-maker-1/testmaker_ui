const common = {
  testId: null,
  type: "",
  testName: "",
  testDesc: "",
  thumbnail: null,

  tags: [],
  optionalURL: "", // 추가 홍보 URL
  private: false, // 공개 여부

  userId: "",
  data: {} // type에 따라 내용 상이
};

const multiple = {
  target: null, // 누구에게 공유하실건가요?
  difficult: null, // 난이도 ex) 질문 6개, 결과 3개

  questions: [
    {
      questionId: null,
      questionTitle: "",
      thumbnail: null, // path -> 접근 보안을 위해 {}으로 추가적인 데이터 받을 수 있음.
      answer: null,
      point: null,
      options: []
    }
  ],
  results: [
    {
      resultId: 1,
      resultTitle: "",
      resultDesc: "",
      scope: null
    }
  ]
};

const mbti = {};

const weight = {};

const initState = {
  common,
  multiple,
  mbti,
  weight
};

export default initState;
