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
      .catch((e) => {
        const { status: code, data } = e.response;
        resolve(
          reducerUtils.error({
            code,
            name: data.name,
          })
        );
      });
  });
};

const post = (path, params = null) => {
  instance.defaults.headers.common = getAxiosHeader();
  return new Promise((resolve) => {
    instance
      .post(path, params)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => {
        const { status: code, data } = e.response;
        resolve(
          reducerUtils.error({
            code,
            name: data.name,
          })
        );
      });
  });
};

const put = (path, params = null) => {
  instance.defaults.headers.common = getAxiosHeader();
  return new Promise((resolve) => {
    instance
      .put(path, params)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => {
        const { status: code, data } = e.response;
        resolve(
          reducerUtils.error({
            code,
            name: data.name,
          })
        );
      });
  });
};

const remove = (path) => {
  instance.defaults.headers.common = getAxiosHeader();
  return new Promise((resolve) => {
    instance
      .delete(path)
      .then(({ data }) => resolve(reducerUtils.success(data)))
      .catch((e) => {
        const { status: code, data } = e.response;
        resolve(
          reducerUtils.error({
            code,
            name: data.name,
          })
        );
      });
  });
};

export { get, post, put, remove };
