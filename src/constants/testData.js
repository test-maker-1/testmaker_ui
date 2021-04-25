export const makingData = {
  testId: 1,
  testName: "여행 테스트",
  type: "multiple",
  userId: "1000peach", // 작성자 ID

  target: "friend", // 누구에게 공유하실건가요?
  difficult: 1, // 난이도 ex) 질문 6개, 결과 3개

  /* 질문 데이터 */
  // 객관식 테스트 기준 -> type에 따라 data 내용 차이
  data: {
    questions: [
      {
        questionId: 1,
        questionTitle: "내가 제일 좋아하는 여행지는?",
        thumbnail: "*.png", // path -> 접근 보안을 위해 {}으로 추가적인 데이터 받을 수 있음.
        answer: "보라카이",
        point: 2, // 정답일 때 점수
        options: ["보라카이", "제주도", "스페인", "발리"]
      }
    ],
    results: [
      {
        resultId: 1,
        resultTitle: "찐친",
        scope: 6 // 6점 이상
      }
    ]
  }
};
