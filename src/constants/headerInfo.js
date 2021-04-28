export const [BACK, SEARCH, LOGO, MENU, NOTHING] = [
  "back",
  "search",
  "logo",
  "menu",
  "nothing"
];

export const initHeader = {
  leftType: SEARCH,
  rightType: MENU,
  title: "TEST MAKER"
};

const headerInfo = {
  "/test/multiple": {
    leftType: "back",
    title: "객관식테스트"
  }
};

export default headerInfo;
