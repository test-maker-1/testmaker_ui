import React from "react";
import BottomBtn from "../../components/frame/BottomBtn";
import ENUM from "../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const TestDetail = (props) => {
  return (
    <div>
      테스트 정보 입력
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "테스트 만들기", type: MOVENEXT },
        ]}
      />
    </div>
  );
};

export default TestDetail;
