const multiple = (resultId) => ({
  resultId,
  description: "",
  title: "",

  img: null, // 썸네일 path
  openImg: false, // 썸네일 오픈 여부 -> 프론트에서만 사용

  pointBound: {
    start: null, // ~이상
    end: null, // ~이하
  }, // 결과 범위
});

const mbti = {};

const weight = {};

const result = { multiple, mbti, weight };

export default result;
