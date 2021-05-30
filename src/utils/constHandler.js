import question from "../constants/question";
import option from "../constants/option";
import result from "../constants/result";
import preset from "../constants/preset";

const initPointBound = {
  start: null,
  end: null,
};

// type: string; ex) multiple || mbti || weight
export const getQuestion = (type, cnt) => {
  const questions = [];

  for (let i = 0; i < cnt; i++) {
    questions.push(question[type](i));
  }

  return questions;
};

export const getOptions = (cnt) => {
  const options = [];

  for (let i = 0; i < cnt; i++) {
    options.push(option(i));
  }

  return options;
};

export const getResults = (type, cnt) => {
  const results = [];

  for (let i = 0; i < cnt; i++) {
    results.push(result[type](i));
  }

  return results;
};

export const getPreset = (type) => {
  return preset[type];
};

/*
 * totalPoints: number;
 * resultsCnt: number;
 */
export const getPointBoundList = (totalPoints, resultsCnt) => {
  let bound = Math.floor(totalPoints / resultsCnt);
  const mod = totalPoints % resultsCnt;

  if (mod !== 0) bound += 1;

  let [i, j, boundCnt, finished] = [0, 0, 0, false];
  let pointBoundList = [];
  let pointBound = { ...initPointBound };

  for (; i <= totalPoints; i++) {
    pointBound.start = i;
    j = i;
    boundCnt = 0;

    while (true) {
      if (j === totalPoints - 1) {
        if (pointBoundList.length >= resultsCnt - 1) {
          j = totalPoints;
          finished = true;
        }
        break;
      } else if (boundCnt >= bound - 1) break;

      j += 1;
      boundCnt += 1;
    }

    pointBound.end = j > totalPoints ? totalPoints : j;
    pointBoundList.push(pointBound);

    i = j;
    j = 0;
    pointBound = { ...initPointBound };

    if (finished) break;
  }

  if (pointBoundList.length !== resultsCnt) return null;
  return pointBoundList;
};
