import React from "react";
import { TitleBox } from "../../components/common/index";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";

import { InputTitle } from "../../styles/index";
import ENUM, { lg } from "../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const TestDetail = (props) => {
  return (
    <PageContainer>
      <TitleBox>
        <InputTitle
          size={lg}
          placeholder="테스트 제목을 적어주세요"
          defaultValue=""
        />
      </TitleBox>
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "테스트 만들기", type: MOVENEXT },
        ]}
      />
    </PageContainer>
  );
};

export default TestDetail;
