import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const [clientURL, baseURL] = [
  env.REACT_APP_CLIENT_URL,
  env.REACT_APP_BASE_URL,
];

export const key = {
  kakao: env.REACT_APP_KAKAO_JS_KEY,
};
