import { useSelector, useDispatch } from "react-redux";
import { updateCommonData } from "../redux/reducer/makingReducer";

const useMaking = () => {
  const data = useSelector((state) => state.making);
  const dispatch = useDispatch();

  const updateCommon = (key, value) =>
    dispatch(updateCommonData({ key, value }));

  return { data, updateCommon };
};

export default useMaking;
