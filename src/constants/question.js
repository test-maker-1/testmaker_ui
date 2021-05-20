const multiple = {
  question: "",
  img: null, // 썸네일 path
  answer: null, // string (추후 변경 가능)
  point: 1,
  options: new Array(3).fill({ name: "" }), // string[],
};

const mbti = {};

const weight = {};

const question = { multiple, mbti, weight };

export default question;
