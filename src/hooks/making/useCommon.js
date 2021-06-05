import { useSelector, useDispatch } from "react-redux";
import {
  initCommonData,
  initTypeData,
  updateCommonData,
  addTag,
  deleteTag,
} from "../../redux/reducer/makingReducer";

import { getQuestions, getPreset, getResults } from "../../utils/constHandler";

const useCommon = () => {
  const data = useSelector((state) => state.making);
  const dispatch = useDispatch();

  // init
  const initCommon = (initMaker = false) => dispatch(initCommonData(initMaker));
  const initStateByType = (type) => {
    const { questionsCnt, resultsCnt } = getPreset(type);
    const questions = getQuestions(type, questionsCnt);
    const results = getResults(type, resultsCnt);

    dispatch(initTypeData({ type, questions, results }));
  };

  // update
  const updateCommon = (key, value) => {
    dispatch(updateCommonData({ key, value }));
  };
  const updateCommonByInput = (e) => {
    const { name, value } = e.target;
    updateCommon(name, value);
  };
  const updateStep = (step) => {
    if (data.step === step) return;
    
    window.scrollTo({ top: 0 });
    updateCommon("step", step);
  };

  // add
  const addNewTag = (tag) => {
    const { tags } = data;

    if (tag.replace(/(\s*)/g, "") < 1) return; // empty string
    if (tags.includes(tag)) return; // duplicate

    dispatch(addTag(tag));
  };

  // delete
  const deleteTagData = (tag) => dispatch(deleteTag(tag));

  return {
    data,
    dispatch,
    // init
    initCommon,
    initStateByType,
    // update
    updateCommon,
    updateStep,
    updateCommonByInput,
    // add
    addNewTag,
    // delete
    deleteTagData,
  };
};

export default useCommon;
