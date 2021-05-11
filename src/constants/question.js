const multiple = () => ({
  question: "",
  img: null, // 썸네일
  imgPath: null, // 썸네일 편집
  answer: null, // 아래와 같은 {optionId: null, content: ""} 형식
  point: null,
  options: ["", "", ""], // string[],
});

const mbti = {};

const weight = {};

const question = { multiple, mbti, weight };

export default question;
