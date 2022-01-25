import { useSelector, useDispatch } from "react-redux";
import {
  addResult,
  deleteResult,
  updateResultData,
  updateTypeData,
} from "../../redux/reducer/makingReducer";
import { getPointBoundList } from "../../utils/constHandler";

const useQnA = () => {
  const { totalPoints, results, questionsCnt, resultsCnt } = useSelector(
    (state) => state.making.data
  );
  const dispatch = useDispatch();

  const onSetResult = () => {
    if (totalPoints <= 0 || totalPoints < resultsCnt - 1) return false;

    const pointBoundList = getPointBoundList(totalPoints, resultsCnt);
    const baseResults = [...results];
    const updateResults = baseResults.map((result, idx) => {
      return { ...result, pointBound: { ...pointBoundList[idx] } };
    });
    dispatch(updateTypeData({ key: "results", value: updateResults }));

    return true;
  };

  const addEmptyResult = () => {
    const pointBoundList = getPointBoundList(totalPoints, resultsCnt + 1);

    if (!pointBoundList) return false;

    dispatch(addResult());
    pointBoundList.forEach((bound, idx) => {
      dispatch(updateResultData({ key: "pointBound", value: bound, idx }));
    });

    return true;
  };

  const handleDeleteResult = (idx) => {
    if (resultsCnt - 1 < 1) return false;

    const pointBoundList = getPointBoundList(totalPoints, resultsCnt - 1);
    dispatch(deleteResult(idx));
    pointBoundList.forEach((bound, idx) => {
      dispatch(updateResultData({ key: "pointBound", value: bound, idx }));
    });

    return true;
  };

  return {
    // data
    totalPoints,
    results,
    questionsCnt,
    resultsCnt,
    // init
    dispatch,
    // update
    onSetResult,
    // add
    addEmptyResult,
    // delete
    handleDeleteResult,
  };
};

export default useQnA;
