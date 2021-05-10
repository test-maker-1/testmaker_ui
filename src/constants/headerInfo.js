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
    "/test/multiple": {
        leftType: BACK,
        title: { type: TITLE, title: "객관식테스트" },
    },
};

export default headerInfo;
