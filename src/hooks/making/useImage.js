import * as loadImage from "blueimp-load-image";
import MakingAPI from "../../api/makingAPI";
import { getFormData } from "../../utils/asyncMakingUtils";
import { SUCCESS } from "../../utils/asyncUtils";

import useMiniReducer from "../useMiniReducer";
import useCommon from "./useCommon";

const useImage = (uploadImg, errorCallback) => {
  const {
    data: { testId },
  } = useCommon();
  const { state, request, requestSuccess, requestError } = useMiniReducer();

  const onUpload = async (e) => {
    request();

    const file = e.target.files[0];
    const fileType = file.type;

    loadImage(
      file,
      (img) => {
        img.toBlob(async (blob) => {
          const rotateFile = new File([blob], file.name, { type: fileType });
          const form = getFormData(rotateFile, testId);
          const { data, status } = await MakingAPI.uploadImg(form);

          if (status === SUCCESS) {
            uploadImg(data.url);
            requestSuccess();
          } else {
            requestError();
            errorCallback();
          }
        }, fileType);
      },
      {
        meta: true,
        orientation: true,
        canvas: true,
        maxWidth: 500,
      }
    );
  };

  const deleteImg = async (img = null) => {
    if (!img) return;
    request();

    const { status } = await MakingAPI.deleteImg(img);
    if (status === SUCCESS) {
      uploadImg(null);
      requestSuccess();
    } else {
      requestError();
      errorCallback();
    }
  };

  return { state, onUpload, deleteImg };
};

export default useImage;
