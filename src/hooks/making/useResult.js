import { useDispatch, useSelector } from "react-redux";
import {
  updateResultData,
  updateTypeData,
} from "../../redux/reducer/makingReducer";

const useResult = () => {
  const {
    testId,
    data: { top },
  } = useSelector((state) => state.making);
  const dispatch = useDispatch();

  const updateTop = (top) => {
    dispatch(updateTypeData({ key: "top", value: top }));
  };

  const updateResult = (key, value, idx) => {
    dispatch(updateResultData({ key, value, idx }));
  };
  const updateResultByInput = (e, idx) => {
    const { name, value } = e.target;
    updateResult(name, value, idx);
  };

  const updateImg = (img, resultIdx) => {
    updateResult("img", img, resultIdx);
  };

  return {
    // data
    testId,
    top,
    // update
    updateTop,
    updateResult,
    updateResultByInput,
    updateImg,
  };
};

export default useResult;
