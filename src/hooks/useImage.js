import useMaking from "./useMaking";
import MakingAPI from "../api/makingAPI";
import { SUCCESS } from "../utils/asyncUtils";
import ENUM from "../constants/Enum";

const useImage = (type, parentIdx, errorCallback) => {
  const {
    data: { testId },
    updateQuestion,
    updateResult,
  } = useMaking();

  const uploadImg = async (file) => {
    const form = new FormData();
    form.append("img", file);
    form.append("path", `test/${testId}`);

    const { data, status } = await MakingAPI.uploadImg(form);

    if (status === SUCCESS) {
      if (type === ENUM.QUESTION) updateQuestion("img", data.url, parentIdx);
      if (type === ENUM.RESULT) updateResult("img", data.url, parentIdx);
    } else {
      errorCallback();
    }
  };

  return { uploadImg };
};

export default useImage;
