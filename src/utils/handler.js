import cookie from "react-cookies";
import { clientURL } from "../constants/config";
import headerInfo, { initHeader } from "../constants/headerInfo";
import msg from "../constants/msg";
import { seqTest, login, test, testing } from "../constants/urlInfo";

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
export const getNextPageURL = (pmatch, plocation) => {
  const {
    params: { module, step },
    path,
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
      nextUrl = `${where}/${seque[seque.indexOf(module) + 1]}${
        plocation.search
      }`;
      break;
    default:
      break;
  }

  return nextUrl;
};

// 포멧한 문자열 반환
export const StringFormat = (format = "", ...props) => {
  let str = format;
  const reg = new RegExp("{\\d}", "g");
  const model = format.match(reg) || [];
  model.forEach((item, idx) => {
    str = str.replace(item, props[idx]);
  });

  return str;
};

export const getAxiosHeader = () => {
  const token = cookie.load("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
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

  let mode = "",
    diff = "";

  if (diffHour > 23) {
    mode = "day";
    diff = parseInt(diffHour);
  } else if (diffHour >= 1) {
    mode = "hour";
    diff = parseInt(diffHour);
  } else if (diffMinute >= 1) {
    mode = "min";
    diff = parseInt(diffMinute);
  } else if (diffSecond > 0) {
    mode = "sec";
    diff = diffSecond < 1 ? 1 : parseInt(diffSecond);
  } else {
    console.log(diffHour, diffMinute, diffSecond, "///", dateA, dateB);
  }

  return { mode, diff };
};

/*
 * 테스트 메이킹 데이터 유효성 검사
 * state: object; -> making reducer state
 */
const { errorMaking } = msg; // error msg
export const checkMakingData = (state) => {
  const { testId, type, title, description, data } = state;
  const {
    top,
    target,
    questionsCnt,
    resultsCnt,
    totalPoints,
    questions,
    results,
  } = data;

  // empty data
  if (
    !testId ||
    !type ||
    data === {} ||
    !target ||
    questionsCnt < 1 ||
    resultsCnt < 1 ||
    questions.length < 1 ||
    results.length < 1
  ) {
    return { releasable: false, msg: errorMaking.empty };
  }

  // empty string
  if (title.length < 1 || description.length < 1) {
    return { releasable: false, msg: errorMaking.empty };
  }

  // invalied data
  if (top < 1) return { releasable: false, msg: errorMaking.invalied };
  // invalied totalPoints
  if (totalPoints < resultsCnt - 1 || totalPoints < results.length - 1) {
    return { releasable: false, msg: errorMaking.invaliedPoints };
  }

  // check question
  const checkQuestion = questions.some((item) => {
    const { question, point, options, answer } = item;
    if (question.length < 1 || !answer) return false;
    if (options.length < 2 || point === null || point < -1 || point > 10)
      return false;

    const checkOption = options.some((option) => option.name.length < 1);
    if (checkOption) return false;

    return true;
  });
  if (!checkQuestion) return { releasable: false, msg: errorMaking.question };

  // check result
  const checkResult = results.some((item) => {
    const { title, description, pointBound } = item;
    if (title.length < 1 || description.length < 1) return false;
    if (pointBound.start === null || pointBound.end === null) return false;

    return true;
  });
  if (!checkResult) return { releasable: false, msg: errorMaking.result };

  return { releasable: true, msg: "만들고 나면 수정할 수 없어요!" };
};

export const copyLinkToClipBoard = () => {
  //현재 주소 링크 클립보드에 복사
  let temp = document.createElement("input");
  document.body.appendChild(temp);
  temp.value = document.location.href;
  temp.select(); //전체선택
  document.execCommand("copy"); //복사
  document.body.removeChild(temp);
};

// 카카오 링크 공유
// all params: string;
const { Kakao } = window;
export const shareKakao = (link, title, description, imageUrl) => {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title,
      description,
      imageUrl: imageUrl,
      link: {
        webUrl: `${clientURL}/${link}`,
        mobileWebUrl: `${clientURL}/${link}`,
      },
    },
    buttons: [
      {
        title: "테스트 해보기",
        link: {
          webUrl: `${clientURL}/${link}`,
          mobileWebUrl: `${clientURL}/${link}`,
        },
      },
      {
        title: "테스트 만들기",
        link: {
          webUrl: clientURL,
          mobileWebUrl: clientURL,
        },
      },
    ],
  });
};
