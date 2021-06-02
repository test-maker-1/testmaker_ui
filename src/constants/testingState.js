/* Testing 공통 데이터 */
const testForm = {
  question: "string",
  img: "string",
  options: [
    {
      name: "string",
    },
    {
      name: "string",
    },
    {
      name: "string",
    },
  ],
};

/* 댓글 형식 */
export const replyForm = {
  testUid: "fe59e1a6-b4bb-4d15-8c65-547a37e82758",
  uid: "2ac255a5-4759-4e7a-9640-20877b54e020",
  content: "테스트 진짜 신박해요~!! ㅋㅋㅋ 우오아아 재밌다",
  writtenAt: 1619324817995,
  // writer: {nickname: "JAEN", profileImg: "", uid: "2aad0c77-6216-4915-817c-ca2f9fd871de"}
  writer: {
    uid: 34234,
    isMe: 0,
    profileImg: "https://~~",
    nickname: "jennny",
  },
  reports: [],
  reportsCnt: 0,
};

const testing = {
  current_testID: "",
  testInfo: {
    uid: "nz6eCHZ2GZJeor6BXJDC",
    title: "성격 유형검사 MBTI Test",
    description:
      "총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오. ",
    coverImg: "https://google.storage/path/to/img",
    maker: {
      name: "메이커짱짱",
      userUid: "nz6eCHZ2GZJeor6BXJDC",
    },
    optionalURL: "this_is_url_to_share",
    participantsCnt: 3258,
    repliesCnt: 879,
    testLink: "https://my-app.test/1",
    tags: ["성격테스트", "우정테스트"],
  },
  questsCnt: 2,
  questions: [
    {
      question:
        "내가 좋아하는 여행시는 어디일까요?\n2주일 때는 아래로 내려주세요.",
      img: "string",
      options: [
        {
          name: "보라카이",
        },
        {
          name: "제주도",
        },
        {
          name: "스페인",
        },
      ],
    },
    {
      question: "string",
      img: "string",
      options: [
        {
          name: "string",
        },
        {
          name: "string",
        },
        {
          name: "string",
        },
      ],
    },
  ],
  /* 정답 형식 */
  answers: { type: "multi", values: [] },
  recent3replies: [
    {
      uid: "nz6eCHZ2GZJeor6BXJDC",
      content: "테스트 진짜 신박해요~!! ㅋㅋㅋ 우오아아 재밌다",
      writtenAt: 1622009843765,
      writer: {
        uid: 34234,
        isMe: 0,
        profileImg: "https://~~",
        nickname: "jennny",
      },
    },
    {
      uid: "nz6eCHZ2GZJeor6BXJDC",
      content: "2줄 테스트 진자 신박해요",
      writtenAt: 1622009495898,
      writer: {
        uid: 34234,
        isMe: 0,
        profileImg: "https://~~",
        nickname: "jennny",
      },
    },
    {
      uid: "nz6eCHZ2GZJeor6BXJDC",
      content: "3줄 테스트 진자 신박해요",
      writtenAt: 1619324817995,
      writer: {
        uid: 34234,
        isMe: 0,
        profileImg: "https://~~",
        nickname: "jennny",
      },
    },
  ],
};

const reply = {
  testUid: "",
  isStop: false,
  replies: [],
};

const resultForm = {
  cnt: 4,
  description:
    "질문이 모두 끝났군요. 구분용입니다. 혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.",
  img: "결과 이미지 path2",
  percent: 27,
  pointBound: { start: 5, end: 7 },
  title: "결과 타이틀2",
};

/* 객관식 테스트 결과 */
const result = {
  isRankMode: false,
  responseUid: "faf8747c-b07b-4541-93e3-d094d0d014d0",
  userTestResult: "결과 타이틀2",
  testResults: [
    resultForm,
    {
      img: "결과 이미지 path",
      description:
        "총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.",
      title: "당신은 센스로 무장했어요",
      pointBound: { end: 4, start: 0 },
      cnt: 0,
      percent: 58,
    },
    {
      img: "결과 이미지 path",
      description: "결과 설명",
      title: "결과 타이틀",
      pointBound: { end: 4, start: 0 },
      cnt: 0,
      percent: 0,
    },
  ],
  repliesCnt: 13,
  recent3Replies: [],
  currentResult: resultForm,
  results: [
    // rank 높은 순대로
    {
      nickname: "찐친",
      score: 20,
    },
    {
      nickname: "찐친",
      score: 20,
    },
    {
      nickname: "찐친",
      score: 20,
    },
    {
      nickname: "찐친",
      score: 20,
    },
    {
      nickname: "찐친",
      score: 19,
    },
  ],
  feedback: {
    emoji: "happy",
    msg: "오 너님 좀 잘 만드신듯 ㅋㅋ",
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
