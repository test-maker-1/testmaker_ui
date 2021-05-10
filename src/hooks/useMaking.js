import { useSelector, useDispatch } from "react-redux";
import {
  updateCommonData,
  updateTypeData,
  addTag,
  deleteTag,
} from "../redux/reducer/makingReducer";

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
