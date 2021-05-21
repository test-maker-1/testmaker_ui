import cookie from "react-cookies";
import headerInfo, { initHeader } from "../constants/headerInfo";
import { seqTest } from "../constants/urlInfo";
import { login, test, testing } from "../constants/urlInfo";

// plocation: string; => path
export const getConfiguration = (plocation) => {
  const { pathname } = plocation;

  let updateHeader = {};
  for (const path in headerInfo) {
    if (pathname.includes(path)) {
      updateHeader = headerInfo[path];
      break;
    }
  }

  const header = {
    ...initHeader,
    ...updateHeader,
  };

  return { header };
};

/*
 * 다음 페이지 URL 반환
 * pmatch: object => url: string
 */
export const getNextPageURL = (pmatch) => {
  const {
    params: { module, step },
    path,
    url,
  } = pmatch;
  const reg = new RegExp("/([A-Za-z]*)", "gi");
  const where = (reg.exec(path) || "")[1];
  let nextUrl = "";

  switch (where) {
    case login: // 로그인
      break;
    case test: // 테스트메이킹
      const sequence = seqTest[module];
      const nextIDX = sequence.indexOf(step) + 1;
      //ex) test/multiple/preset
      nextUrl = `${where}/${module}/${sequence[nextIDX]}`;
      break;
    case testing: // 테스트
      const seque = seqTest[testing];
      //ex) testing/welcome
      nextUrl = `${where}/${seque[seque.indexOf(module) + 1]}`;
      break;
    default:
      break;
  }

  return nextUrl;
};

export const getAxiosHeader = () => {
  const token = cookie.load("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
