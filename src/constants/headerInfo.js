export const [BACK, SEARCH, LOGO, MENU, NOTHING, TITLE] = [
  "back",
  "search",
  "logo",
  "menu",
  "nothing",
  "title",
];

export const initHeader = {
  leftType: SEARCH,
  rightType: MENU,
  title: { type: LOGO, title: null },
};

const headerInfo = {
  "/release": {
    leftType: LOGO,
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
};

export default headerInfo;
