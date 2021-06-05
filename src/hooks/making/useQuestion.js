import { useSelector, useDispatch } from "react-redux";
import MakingAPI from "../../api/makingAPI";
import {
  updateQuestionData,
  updateOptionData,
  addQuestion,
  deleteQuestion,
} from "../../redux/reducer/makingReducer";
import { SUCCESS } from "../../utils/asyncUtils";

const useQuestion = () => {
  const { target, questions = [], questionsCnt } = useSelector(
    (state) => state.making.data
  );
  const dispatch = useDispatch();

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

  const getPreset = async (questionIdx) => {
    const { data, status } = await MakingAPI.getQuestionPreset(target);
    if (status === SUCCESS) {
      updateQuestion("question", data.questions[0], questionIdx);
      return true;
    }
    return false;
  };

  return {
    // data
    questions,
    // update
    updateQuestion,
    handleUpdate,
    updateImg,
    updateOption,
    // add
    addEmptyQuestion,
    // delete
    deleteQuestionData,
    getPreset,
  };
};

export default useQuestion;
