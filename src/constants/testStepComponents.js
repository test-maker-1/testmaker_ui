// common
import TestDetail from "../view/testmaking/TestDetail";
import TestRelease from "../view/testmaking/TestRelease";

// multiple
import MultiplePreset from "../view/testmaking/multiple/MultiplePreset";
import MultipleQA from "../view/testmaking/multiple/MultipleQA";
import MultipleResult from "../view/testmaking/multiple/MultipleResult";
import MultipleReplay from "../view/testmaking/multiple/MultipleReplay";

import {
  preset,
  qna,
  result,
  detail,
  replay,
  release,
} from "../constants/urlInfo";

const multiple = {
  [preset]: <MultiplePreset />,
  [qna]: <MultipleQA />,
  [result]: <MultipleResult />,
  [detail]: <TestDetail />,
  [replay]: <MultipleReplay />,
  [release]: <TestRelease />,
};

const mbti = {};

const weight = {};

const components = {
  multiple,
  mbti,
  weight,
};

export default components;
