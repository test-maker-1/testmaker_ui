/*
 * nextResultId: number;
 */
const multiple = (nextResultId) => ({
  resultId: nextResultId, // 결과 편집 시 식별 위해 ID 부여
  resultTitle: "",
  thumbnail: null,
  content: "",
  scope: {} // 결과 범위
});

const mbti = {};

const weight = {};

const result = { multiple, mbti, weight };

export default result;
