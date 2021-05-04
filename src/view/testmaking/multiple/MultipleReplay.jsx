import React from "react";
import BottomBtn from "../../../components/frame/BottomBtn";
import ENUM from "../../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const MultipleReplay = (props) => {
  return (
    <div>
      객관식 테스트 다시보기
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "테스트 만들기", type: MOVENEXT },
        ]}
      />
    </div>
  );
};

export default MultipleReplay;
