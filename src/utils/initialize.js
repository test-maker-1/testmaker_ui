import { key } from "../constants/config";

const { Kakao } = window;

export default function initialize() {
  Kakao.init(key.kakao);
}
