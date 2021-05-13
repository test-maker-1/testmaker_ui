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
};

export default headerInfo;
