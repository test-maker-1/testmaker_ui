import { getOptions } from "../utils/constHandler";
import preset from "./preset";

const { multiple: multiplePreset } = preset;

const multiple = (questionId) => ({
  questionId,
  question: "",
  answer: null, // string

  img: null, // 썸네일 path
  point: 1,

  nextOptionId: multiplePreset.optionsCnt, // 다음 옵션 Id -> 식별 위해 프론트에서만 사용
  options: getOptions(multiplePreset.optionsCnt),
});

const mbti = {};

const weight = {};

const question = { multiple, mbti, weight };

export default question;
