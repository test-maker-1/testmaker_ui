import MakingAPI from "../api/makingAPI";

export const saveTest = async (params) => {
  const { status } = await MakingAPI.saveTest(params);
  return status;
};

export const uploadImg = async (file) => {
  const form = new FormData();
  form.append("img", file.img);
  form.append("path", file.path);
  const { data, status } = await MakingAPI.uploadImg(form);

  return { data, status };
};
