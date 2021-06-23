import MakingAPI from "../api/makingAPI";
import msg from "../constants/msg";

export const saveTest = async (params) => {
  const { status } = await MakingAPI.saveTest(params);
  return status;
};

export const getFormData = (file, testId) => {
  const form = new FormData();
  form.append("img", file);
  form.append("path", `test/${testId}`);

  return form;
};

/*
 * 테스트 메이킹 데이터 유효성 검사
 * state: object; -> making reducer state
 */
const { errorMaking } = msg; // error msg
export const checkMakingData = (state) => {
  const { testId, type, title, description, data } = state;
  const {
    isRankMode,
    top,
    target,
    questionsCnt,
    resultsCnt,
    totalPoints,
    questions,
    results,
  } = data;

  // empty data
  if (
    !testId ||
    !type ||
    data === {} ||
    !target ||
    questionsCnt < 1 ||
    questions.length < 1
  ) {
    return { releasable: false, msg: errorMaking.empty };
  }
  // empty string
  if (title.length < 1 || description.length < 1) {
    return { releasable: false, msg: errorMaking.empty };
  }
  // check question
  const okQuestion = checkQuestion(questions);
  if (!okQuestion) return { releasable: false, msg: errorMaking.question };
  // check result
  const { okResult, resultError } = checkResult(
    isRankMode,
    top,
    results,
    resultsCnt,
    totalPoints
  );
  if (!okResult) return { releasable: false, msg: resultError };

  return { releasable: true, msg: "만들고 나면 수정할 수 없어요!" };
};

export const checkQuestion = (questions) => {
  const okQuestion = questions.some((item) => {
    const { question, point, options, answer } = item;
    if (question.length < 1 || !answer) return false;
    if (options.length < 2 || point === null || point < -1 || point > 10)
      return false;

    const checkOption = options.some((option) => option.name.length < 1);
    if (checkOption) return false;

    return true;
  });

  return okQuestion;
};

export const checkResult = (
  isRankMode,
  top,
  results,
  resultsCnt,
  totalPoints
) => {
  if (isRankMode) {
    // invalied data
    if (top < 1) return { okResult: false, resultError: errorMaking.invalied };
  } else {
    // empty data
    if (resultsCnt < 1 || results.length < 1) {
      return { okResult: false, resultError: errorMaking.empty };
    }
    // invalied data
    const checkResultBound = results.some((item) => {
      const { title, description, pointBound } = item;
      if (title.length < 1 || description.length < 1) return false;
      if (pointBound.start === null || pointBound.end === null) return false;

      return true;
    });
    if (!checkResultBound) {
      return { okResult: false, resultError: errorMaking.result };
    }
    // invalied totalPoints
    if (totalPoints < resultsCnt - 1 || totalPoints < results.length - 1) {
      return { okResult: false, msg: errorMaking.invaliedPoints };
    }
  }

  return { okResult: true };
};

const serverKeys = [
  "createdAt",
  "isDisabled",
  "isSubmitted",
  "likesCnt",
  "participantsCnt",
  "repliesCnt",
  "sharedCnt",
  "testLink",
];

export const formattingTempTest = (tempTest) => {
  const modifyTest = { ...tempTest };

  modifyTest.testId = modifyTest.uid;
  delete modifyTest.uid;

  // delete unusual key
  serverKeys.forEach((key) => {
    if (modifyTest.hasOwnProperty(key)) delete modifyTest[key];
  });

  // step: preset
  if (modifyTest.step === "preset") {
    if (modifyTest.hasOwnProperty("data")) return modifyTest;
    return modifyTest;
  }

  modifyTest.data.questionsCnt = modifyTest.data.questsCnt;
  delete modifyTest.data.questsCnt;

  const { questionsCnt, resultsCnt } = modifyTest.data;

  // add only front data in question (+ option)
  let totalPoints = 0;

  for (let i = 0; i < questionsCnt; i++) {
    const { point, options } = modifyTest.data.questions[i];

    modifyTest.data.questions[i].questionId = i;
    totalPoints += point;

    modifyTest.data.questions[i].nextOptionId = options.length;

    for (let j = 0; j < options.length; j++) {
      modifyTest.data.questions[i].options[j].optionId = j;
    }
  }
  modifyTest.data.nextQuestionId = questionsCnt;
  modifyTest.data.totalPoints = totalPoints;

  // add only front data in result
  for (let i = 0; i < resultsCnt; i++) {
    modifyTest.data.results[i].resultId = i;
  }
  modifyTest.data.nextResultId = resultsCnt;

  return modifyTest;
};
