import React from "react";
import BottomBtn from "../../components/frame/BottomBtn";
import ENUM from "../../constants/Enum";

const TestRelease = (props) => {
  return (
    <div>
      테스트 배포 설정
      <BottomBtn btnArr={[{ name: "홈으로 가기", type: ENUM.HOME }]} />
    </div>
  );
};

export default TestRelease;
