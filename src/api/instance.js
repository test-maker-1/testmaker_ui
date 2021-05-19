import axios from "axios";
import { reducerUtils } from "../utils/asyncUtils";
import { baseURL } from "../constants/config";

const photoBaseURL = "https://photo.dev"; // 추후 .env에서 가져와서 넣어야 함

export const [DEFAULT, PHOTO] = ["default", "photo"];

const instances = {
  [DEFAULT]: axios.create({
    baseURL: baseURL,
    withCredentials: true,
  }),
  [PHOTO]: axios.create({
    baseURL: photoBaseURL,
    withCredentials: true,
  }),
};

const get = (path, type = DEFAULT) => {
  const instance = instances[type];
  return new Promise((resolve, reject) => {
    instance
      .get(path)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => resolve(reducerUtils.error(e.message)));
  });
};

const post = (path, params = null, type = DEFAULT) => {
  const instance = instances[type];
  return new Promise((resolve, reject) => {
    instance
      .post(path, params)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => resolve(reducerUtils.error(e.message)));
  });
};

export { photoBaseURL, get, post };
