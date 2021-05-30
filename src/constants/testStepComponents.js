// common
import TestDetail from "../view/testmaking/TestDetail";

// multiple
import MultiplePreset from "../view/testmaking/multiple/MultiplePreset";
import MultipleQnA from "../view/testmaking/multiple/MultipleQnA";
import MultipleResult from "../view/testmaking/multiple/MultipleResult";

import { preset, qna, result, detail } from "../constants/urlInfo";

const multiple = {
  [preset]: <MultiplePreset />,
  [qna]: <MultipleQnA />,
  [result]: <MultipleResult />,
  [detail]: <TestDetail />,
};

const mbti = {};

const weight = {};

const components = {
  multiple,
  mbti,
  weight,
};

export default components;
