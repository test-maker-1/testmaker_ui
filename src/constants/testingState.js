/* Testing 공통 데이터 */
// const testForm = {
//   question: "string",
//   img: "string",
//   options: [
//     {
//       name: "string",
//     },
//     {
//       name: "string",
//     },
//     {
//       name: "string",
//     },
//   ],
// // };

/* 댓글 형식 */
export const replyForm = {
  testUid: "",
  uid: "",
  content: "",
  writtenAt: null,
  writer: {
    uid: "",
    isMe: 0,
    profileImg: "",
    nickname: "",
  },
  reports: [],
  reportsCnt: 0,
};

const testing = {
  current_testID: null,
  testInfo: {
    uid: "",
    title: "",
    description: "",
    coverImg: "",
    maker: {
      name: "",
      userUid: "",
    },
    optionalURL: "",
    participantsCnt: 0,
    repliesCnt: 0,
    testLink: "",
    tags: [],
  },
  questsCnt: 0,
  questions: [],
  /* 정답 형식 */
  answers: { type: "multi", values: [] },
  recent3replies: [],
};

const reply = {
  testUid: "",
  isStop: false,
  replies: [],
};

const resultForm = {
  cnt: 0,
  description: "",
  img: "",
  percent: 0,
  pointBound: { start: 0, end: 0 },
  title: "",
};

/* 객관식 테스트 결과 */
const result = {
  isRankMode: false,
  responseUid: null,
  testUid: null,
  userTestResult: "",
  testResults: [resultForm],
  repliesCnt: 0,
  recent3Replies: [],
  currentResult: resultForm,
  results: [],
  feedback: {
    emoji: "",
    msg: "",
  },
};

const initState = {
  testing,
  reply,
  result,
};

export default initState;
