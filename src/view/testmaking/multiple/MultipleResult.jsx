import React from "react";
import BottomBtn from "../../../components/frame/BottomBtn";
import ENUM from "../../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const MultipleResult = (props) => {
  return (
    <div>
      테스트 결과 입력
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "다 적었어요", type: MOVENEXT },
        ]}
      />
    </div>
  );
};

export default MultipleResult;
