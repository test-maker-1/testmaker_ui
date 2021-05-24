import axios from "axios";
import { reducerUtils } from "../utils/asyncUtils";
import { getAxiosHeader } from "../utils/handler";
import { baseURL } from "../constants/config";

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

const get = (path) => {
  instance.defaults.headers.common = getAxiosHeader();
  return new Promise((resolve) => {
    instance
      .get(path)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => resolve(reducerUtils.error(e.message)));
  });
};

const post = (path, params = null) => {
  instance.defaults.headers.common = getAxiosHeader();
  return new Promise((resolve) => {
    instance
      .post(path, params)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => resolve(reducerUtils.error(e))); // e: { code, message }
  });
};

export { get, post }; // put, delete 등 추가 필요
