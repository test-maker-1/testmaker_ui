import theme from "../styles/theme";

export const [BACK, SEARCH, LOGO, MENU, NOTHING, TITLE, CUSTOM] = [
  "back",
  "search",
  "logo",
  "menu",
  "nothing",
  "title",
  "custom",
];

export const initHeader = {
  leftType: SEARCH,
  rightType: MENU,
  title: { type: LOGO, title: null },
};

const headerInfo = {
  "/release": {
    leftType: BACK,
    title: { type: TITLE, title: "오늘의 테스트" },
  },

  "/test/multiple": {
    leftType: BACK,
    title: { type: TITLE, title: "객관식 테스트" },
  },

  "login/find-pw/complete": {
    leftType: NOTHING,
    title: { type: NOTHING },
    rightType: NOTHING,
  },

  "/login/find-pw": {
    leftType: BACK,
    title: { type: TITLE, title: "비밀번호 찾기" },
  },

  "/login": {
    leftType: BACK,
    title: { type: TITLE, title: "로그인" },
  },

  "/register/complete": {
    leftType: NOTHING,
    title: { type: NOTHING },
    rightType: NOTHING,
  },

  "/register": {
    leftType: BACK,
    title: { type: TITLE, title: "회원가입" },
  },

  "/testing/welcome": {
    leftType: BACK,
    title: { type: NOTHING },
    background: theme.colors.lightblue,
  },

  "/testing/comments": {
    leftType: BACK,
    title: { type: TITLE, title: "댓글" },
  },

  "/testing/exam": {
    leftType: BACK,
    title: { type: CUSTOM },
  },

  "/testing/result": {
    leftType: BACK,
    title: { type: NOTHING },
    background: theme.colors.lightblue,
  },

  "testing/otherType": {
    leftType: BACK,
    title: { type: NOTHING },
    background: "#fff",
  },

  "mypage/main": {
    leftType: BACK,
    title: { type: TITLE, title: "마이페이지" },
  },

  "mypage/manage": {
    leftType: BACK,
    title: { type: TITLE, title: "계정 관리" },
  },
};

export default headerInfo;
