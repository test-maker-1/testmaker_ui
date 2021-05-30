import { getOptions } from "../utils/constHandler";

const nextOptionId = 3;

const multiple = (questionId) => ({
  questionId,
  question: "",
  img: null, // 썸네일 path
  answer: null, // string
  point: 1,
  nextOptionId,
  options: getOptions(nextOptionId),
});

const mbti = {};

const weight = {};

const question = { multiple, mbti, weight };

export default question;
