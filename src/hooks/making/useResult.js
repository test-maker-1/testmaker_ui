import { useDispatch, useSelector } from "react-redux";
import {
  updateResultData,
  updateTypeData,
} from "../../redux/reducer/makingReducer";

const useResult = () => {
  const {
    testId,
    data: { isRankMode, top },
  } = useSelector((state) => state.making);
  const dispatch = useDispatch();

  const updateTop = (value) => {
    const newTop = Number(value);
    if (newTop === top || newTop < 0) return;
    dispatch(updateTypeData({ key: "top", value: newTop }));
  };
  const updateMode = () => {
    dispatch(updateTypeData({ key: "isRankMode", value: !isRankMode }));
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
    isRankMode,
    top,
    // update
    updateMode,
    updateTop,
    updateResult,
    updateResultByInput,
    updateImg,
  };
};

export default useResult;
