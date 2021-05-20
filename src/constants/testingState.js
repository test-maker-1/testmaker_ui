/* 댓글 형식 */
const replyForm = {
  uid: "nz6eCHZ2GZJeor6BXJDC",
  content: "테스트 진짜 신박해요~!! ㅋㅋㅋ 우오아아 재밌다",
  writtenAt: 1619324817995,
  writer: {
    uid: 34234,
    isMe: 0,
    profileImg: "https://~~",
    nickname: "jennny",
  },
};

/* Testing 공통 데이터 */
const welcome = {
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
  recent3replies: [
    {
      uid: "nz6eCHZ2GZJeor6BXJDC",
      content: "테스트 진짜 신박해요~!! ㅋㅋㅋ 우오아아 재밌다",
      writtenAt: 1619324817995,
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
      writtenAt: 1619324817995,
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

const reply = [replyForm, replyForm, replyForm];

/* 객관식 테스트 */
const result = {
  testId: 2323432,
  feedback: {
    emoji: "happy",
    msg: "오 너님 좀 잘 만드신듯 ㅋㅋ",
  },
  userAnswers: [0, 2, 4, 5, 2],
};

const initState = {
  welcome,
  reply,
};

export default initState;
