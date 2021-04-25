/*
 * nextQuestionId: number;
 */
const multiple = (nextQuestionId) => ({
  questionId: nextQuestionId, // 질문 편집 시 식별 위해 ID 부여
  questionTitle: "",
  thumbnail: null,
  answer: null, // 아래와 같은 {optionId: null, content: ""} 형식
  point: null,

  nextOptionId: 3, // 다음에 추가될 옵션 ID -> 임시로 3개로 초기화 시킴
  options: [
    {
      optionId: null, // 옵션 편집 시 식별 위해 ID 부여
      content: ""
    }
  ]
});

const mbti = {};

const weight = {};

const question = { multiple, mbti, weight };

export default question;
