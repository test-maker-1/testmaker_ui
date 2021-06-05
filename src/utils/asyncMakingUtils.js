import MakingAPI from "../api/makingAPI";

export const saveTest = async (params) => {
  const { status } = await MakingAPI.saveTest(params);
  return status;
};

export const getFormData = (file, testId) => {
  const form = new FormData();
  form.append("img", file);
  form.append("path", `test/${testId}`);

  return form;
};
