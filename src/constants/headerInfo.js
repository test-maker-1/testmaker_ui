export const [BACK, SEARCH, LOGO, MENU, NOTHING] = [
  "back",
  "search",
  "logo",
  "menu",
  "nothing",
];

export const initHeader = {
  leftType: SEARCH,
  rightType: MENU,
  title: "TEST MAKER",
};

const headerInfo = {
  "/release": {
    leftType: LOGO,
  },
  "/test/multiple": {
    leftType: BACK,
    title: "객관식테스트",
  },

  "login/find-pw/complete": {
    leftType: NOTHING,
    title: "",
    rightType: NOTHING,
  },

  "/login/find-pw": {
    leftType: BACK,
    title: "비밀번호 찾기",
  },

  "/login": {
    leftType: BACK,
    title: "로그인",
  },

  "/register/complete": {
    leftType: NOTHING,
    title: "",
    rightType: NOTHING,
  },

  "/register": {
    leftType: BACK,
    title: "회원가입",
  },
};

export default headerInfo;
