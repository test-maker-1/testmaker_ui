import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const baseURL = env.REACT_APP_BASE_URL;

export const key = {
  kakao: env.REACT_APP_KAKAO_JS_KEY,
};
