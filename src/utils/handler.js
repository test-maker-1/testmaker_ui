import headerInfo, { initHeader } from "../constants/headerInfo";
import { seqTest } from "../constants/urlInfo";
import { login, test, testing } from "../constants/urlInfo";
/*
 * plocation: string; => path
 */
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
 *  다음 페이지 URL 반환
 *  pmatch:object => url:string
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
    case login: //로그인
      break;
    case test: //테스트메이킹
      const sequence = seqTest[module];
      const nextIDX = sequence.indexOf(step) + 1;
      //ex) test/multiple/preset
      nextUrl = `${where}/${module}/${sequence[nextIDX]}`;
      break;
    case testing: //테스트
      const seque = seqTest[testing];
      //ex) testing/welcome
      nextUrl = `${where}/${seque[seque.indexOf(module) + 1]}`;
      break;
  }

  return nextUrl;
};

export const StringFormat = (format, ...props) => {
  console.log(format, props);
  return format;
};

/*
 * 현재기준 날짜 정보 반환
 * timestamp:기준 시간으로 없을 경우 현재 시스템일자 (number || string)
 * form:string (object || string)
 */
export const getDateInfo = (timestamp, form = "/") => {
  const current = timestamp ? new Date(timestamp) : new Date();
  const year = current.getFullYear();
  let month = current.getMonth() + 1;
  let date = current.getDate();

  if (form === "object") return { year, month, date };
  else {
    month = month.toString().padStart(2, "0");
    date = date.toString().padStart(2, "0");

    if (form === "년월일")
      return StringFormat("{0}년{1}월{2}일", year, month, date);
    else return StringFormat(`{0}${form}{1}${form}{2}`, year, month, date);
  }
};

/*
 * 두 사이간 시간차 계산
 * dateA, dateB: timestamp
 */
export const diffByTime = (dateA, dateB) => {
  const A = new Date(dateA).getTime();
  const B = new Date(dateB).getTime();
  const calc = (B - A) / 1000;

  //초 / 분 / 시간 단위
  const diffSecond = Math.abs(calc);
  const diffMinute = Math.abs(calc / 60);
  const diffHour = Math.abs(calc / 60 / 60);

  if (diffHour > 23) return { mode: "day", diff: parseInt(diffHour) };
  else if (diffHour > 0) return { mode: "hour", diff: parseInt(diffHour) };
  else if (diffMinute > 0) return { mode: "min", diff: parseInt(diffMinute) };
  else if (diffSecond > 0) return { mode: "sec", diff: parseInt(diffSecond) };
};
