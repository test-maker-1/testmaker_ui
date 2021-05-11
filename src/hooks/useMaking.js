import { useSelector, useDispatch } from "react-redux";
import {
  updateCommonData,
  updateTypeData,
  addTag,
  deleteTag,
  initTypeData,
} from "../redux/reducer/makingReducer";

import question from "../constants/question";
import result from "../constants/result";
import preset from "../constants/preset";

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

  const initStateByType = (type) => {
    const { questionsCnt, resultsCnt } = preset[type]();

    const emptyQuestion = question[type]();
    const questions = new Array(questionsCnt).fill(emptyQuestion);

    const emptyResult = result[type]();
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
    // add
    addNewTag,
    // delete
    deleteTag,
  };
};

export default useMaking;
