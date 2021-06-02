import useMaking from "./useMaking";
import MakingAPI from "../api/makingAPI";
import { SUCCESS } from "../utils/asyncUtils";
import ENUM from "../constants/Enum";

const others = { coverImg: "coverImg" };

const useImage = (type, parentIdx, errorCallback) => {
  const {
    data: { testId },
    updateCommon,
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
      if (type === others.coverImg) updateCommon("coverImg", data.url);
    } else {
      errorCallback();
    }
  };

  const deleteImg = async (img) => {
    const { status } = await MakingAPI.deleteImg(img);
    if (status === SUCCESS) {
      if (type === ENUM.QUESTION) updateQuestion("img", null, parentIdx);
      if (type === ENUM.RESULT) updateResult("img", null, parentIdx);
      if (type === others.coverImg) updateCommon("coverImg", null);
    } else {
      errorCallback();
    }
  };

  return { uploadImg, deleteImg };
};

export default useImage;
