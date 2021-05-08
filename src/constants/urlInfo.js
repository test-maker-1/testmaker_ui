import { multiple, mbti, weight } from "./Enum";

export const [
    home,
    login,
    test,
    testing,
    picktest,
    preset,
    qna,
    result,
    detail,
    replay,
    preview,
    release,
    kakao,
    other,
    email,
    naver,
    google,
    register,
    emailAuth,
    profile,
    complete,
    findPw,
    pwSetting,
] = [
    "",
    "login",
    "test",
    "test-ing",
    "pick-test",
    "preset",
    "qna",
    "result",
    "detail",
    "replay",
    "preview",
    "release",
    "kakao",
    "other",
    "email",
    "naver",
    "google",
    "register",
    "email-auth",
    "profile",
    "complete",
    "find-pw",
    "pw-setting",
];

// https://www.notion.so/depromeet/Routing-URL-9a3efbefa3d84b679a23ea4a798a299f
export const seqTest = {
    [multiple]: [preset, qna, result, detail, replay, release],
    [mbti]: [preset, qna, detail, replay, release],
    [weight]: [preset, result, qna, detail, replay, release],
};

// export const loginModule = {
//     [login]: ["", kakao, other],
// };
