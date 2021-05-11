import { useSelector, useDispatch } from "react-redux";
import {
  updateCommonData,
  updateTypeData,
  updateQuestionData,
  addTag,
  deleteTag,
  initTypeData,
} from "../redux/reducer/makingReducer";

import { getQuestion, getResult, getPreset } from "../utils/constHandler";

const useMaking = () => {
  const data = useSelector((state) => state.making);
  const dispatch = useDispatch();

  const updateCommon = (key, value) =>
    dispatch(updateCommonData({ key, value }));

  const updateCommonByInput = (e) => {
    const { name, value } = e.target;
    updateCommon(name, value);
  };

  const updateTypeDataByInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateTypeData({ key: name, value }));
  };

  const updateQuestion = (key, value, idx = null) => {
    dispatch(updateQuestionData({ key, value, idx }));
  };

  const initStateByType = (type) => {
    const { questionsCnt, resultsCnt } = getPreset(type);

    const emptyQuestion = getQuestion(type);
    const questions = new Array(questionsCnt).fill(emptyQuestion);

    const emptyResult = getResult(type);
    const results = new Array(resultsCnt).fill(emptyResult);

    dispatch(initTypeData({ type, questions, results }));
  };

  // tag: string;
  const addNewTag = (tag) => {
    const { tags } = data;

    if (tag.replace(/(\s*)/g, "") < 1) return; // empty string
    if (tags.includes(tag)) return; // duplicate

    dispatch(addTag(tag));
  };

  return {
    data,
    dispatch,
    // init
    initStateByType,
    // update
    updateCommon,
    updateCommonByInput,
    updateTypeDataByInput,
    updateQuestion,
    // add
    addNewTag,
    // delete
    deleteTag,
  };
};

export default useMaking;
