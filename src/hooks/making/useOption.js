import { useDispatch } from "react-redux";
import {
  updateQuestionData,
  updateOptionData,
  addOption,
  deleteOptionData,
} from "../../redux/reducer/makingReducer";

const useOption = () => {
  const dispatch = useDispatch();

  const updateQuestion = (key, value, idx) => {
    dispatch(updateQuestionData({ key, value, idx }));
  };

  const updateOption = (questionIdx, idx, beforeOption, option) => {
    dispatch(updateOptionData({ questionIdx, idx, beforeOption, option }));
  };
  const onUpdate = (newOption, questionIdx, optionIdx, value) => {
    updateOption(questionIdx, optionIdx, value, newOption);
  };

  const addEmptyOption = (questionIdx) => dispatch(addOption(questionIdx));

  const deleteOption = (questionIdx, optionIdx, optionsCnt) => {
    if (optionsCnt - 1 < 2) return false;

    dispatch(deleteOptionData({ questionIdx, optionIdx }));
    return true;
  };

  const checkAnswer = (questionIdx, value) => {
    updateQuestion("answer", value, questionIdx);
  };

  return {
    // update
    onUpdate,
    checkAnswer,
    // add
    addEmptyOption,
    // delete
    deleteOption,
  };
};

export default useOption;
