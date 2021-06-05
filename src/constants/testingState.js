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
  responseUid: "",
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

/** Reply
 * {
  "responseUid": "3fb7fb46-eb1d-4fed-a04b-12278466711b",
  "isRankMode": false,
   "userTestResult": "결과 타이틀2",
   "testResults": [
    {
      img: "결과 이미지 path",
      description: "결과 설명",
      title: "결과 타이틀2",
      pointBound: { end: 4, start: 0 },
      cnt: 0,
      percent: 0,
    }, ...
  ],
  "results": [
    // rank 높은 순대로
    {
      "nickname": "찐친",
      "score": 20
    },
    {
      "nickname": "찐친",
      "score": 20
    },
    {
      "nickname": "찐친",
      "score": 20
    },
    {
      "nickname": "찐친",
      "score": 20
    },
    {
      "nickname": "찐친",
      "score": 19
    }
  ],
  "repliesCnt": 180,
  "recent3replies": [
    {
      "uid": "nz6eCHZ2GZJeor6BXJDC",
      "content": "테스트 진짜 신박해요~!! ㅋㅋㅋ 우오아아 재밌다",
      "writtenAt": 1619324817995,
      "writer": {
        "uid": 34234,
        "isMe": 0,
        "profileImg": "https://~~"
      }
    },
    {
      "uid": "nz6eCHZ2GZJeor6BXJDC",
      "content": "2줄 테스트 진자 신박해요",
      "writtenAt": 1619324817995,
      "writer": {
        "uid": 34234,
        "isMe": 1,
        "profileImg": "https://~~"
      }
    },
    {
      "uid": "nz6eCHZ2GZJeor6BXJDC",
      "content": "3줄 테스트 진자 신박해요",
      "writtenAt": 1619324817995,
      "writer": {
        "uid": 34234,
        "isMe": 0,
        "profileImg": "https://~~"
      }
    }
  ],
  "testRecommendations": {
    // 후순위임 ???
  }
}
*/
