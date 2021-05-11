import question from "../constants/question";
import result from "../constants/result";
import preset from "../constants/preset";

// type: string; ex) multiple || mbti || weight
export const getQuestion = (type) => {
  return question[type];
};

export const getResult = (type) => {
  return result[type];
};

export const getPreset = (type) => {
  return preset[type];
};
