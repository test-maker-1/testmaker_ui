import multipleImg from "../resources/images/multiple.png";
import mbtiImg from "../resources/images/mbti.png";
import weightImg from "../resources/images/weight.png";

const multiple = {
  name: "객관식",
  thumbnail: multipleImg,
  desc: (
    <>
      사람이나 특정 대상에 해서
      <br />
      객관식 문제를 맞추는 테스트예요
    </>
  ),
};

const mbti = {
  name: "성격",
  thumbnail: mbtiImg,
  desc: (
    <>
      8가지 성향을 조합해서 16가지
      <br />
      성격 유형을 정해주는 테스트예요
    </>
  ),
};

const weight = {
  name: "성향",
  thumbnail: weightImg,
  desc: (
    <>
      미리 성향을 만들어두고 어떤 성향에
      <br />
      가까운지 선택하는 테스트예요
    </>
  ),
};

const testInfo = {
  multiple,
  mbti,
  weight,
};

export default testInfo;
