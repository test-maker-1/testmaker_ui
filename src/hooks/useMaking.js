import { useSelector, useDispatch } from "react-redux";
import { updateCommonData, addNewTag } from "../redux/reducer/makingReducer";

const useMaking = () => {
  const data = useSelector((state) => state.making);
  const dispatch = useDispatch();

  const updateCommon = (key, value) =>
    dispatch(updateCommonData({ key, value }));

  const updateCommonByInput = (e) => {
    const { name, value } = e.target;
    updateCommon(name, value);
  };

  // tag: string;
  const addTag = (tag) => {
    const { tags } = data;

    if (tag.replace(/(\s*)/g, "") < 1) return; // empty string
    if (tags.includes(tag)) return; // duplicate

    dispatch(addNewTag(tag));
  };

  return { data, updateCommon, updateCommonByInput, addTag };
};

export default useMaking;
