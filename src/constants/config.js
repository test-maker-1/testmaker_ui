import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const baseURL = env.REACT_APP_BASE_URL;
