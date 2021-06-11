import { useSelector, useDispatch } from "react-redux";
import {
  updateQuestionData,
  updateOptionData,
  addQuestion,
  deleteQuestion,
} from "../../redux/reducer/makingReducer";
import { checkQuestion } from "../../utils/asyncMakingUtils";

const useQuestion = () => {
  const { target, questions = [], questionsCnt } = useSelector(
    (state) => state.making.data
  );
  const dispatch = useDispatch();

  const checkNextStep = () => {
    return checkQuestion(questions);
  };

  const updateQuestion = (key, value, idx) => {
    dispatch(updateQuestionData({ key, value, idx }));
  };
  const handleUpdate = (e, questionIdx) => {
    const { name, value } = e.target;
    updateQuestion(name, value, questionIdx);
  };
  const updateImg = (img, questionIdx) => {
    updateQuestion("img", img, questionIdx);
  };

  const updateOption = (questionIdx, idx, beforeOption, option) => {
    dispatch(updateOptionData({ questionIdx, idx, beforeOption, option }));
  };

  const addEmptyQuestion = () => dispatch(addQuestion());

  const deleteQuestionData = (questionIdx) => {
    if (questionsCnt - 1 < 1) return false;
    dispatch(deleteQuestion(questionIdx));
    return true;
  };

  const setPreset = (questionIdx, preset) => {
    updateQuestion("question", preset, questionIdx);
  };

  return {
    // data
    target,
    questions,
    // check
    checkNextStep,
    // update
    updateQuestion,
    handleUpdate,
    updateImg,
    updateOption,
    // add
    addEmptyQuestion,
    // delete
    deleteQuestionData,
    setPreset,
  };
};

export default useQuestion;
