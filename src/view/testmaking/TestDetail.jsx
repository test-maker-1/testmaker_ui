import React from "react";

import { TitleBox } from "../../components/common/index";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { Input, InputTitle } from "../../styles/index";

import useMaking from "../../hooks/useMaking";
import ENUM, { lg } from "../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const TestDetail = () => {
  const { data, updateCommonByInput } = useMaking();
  const { testName, optionalURL } = data;

  return (
    <PageContainer>
      <TitleBox>
        <InputTitle
          size={lg}
          name="testName"
          placeholder="테스트 제목을 적어주세요"
          defaultValue={testName}
          onBlur={updateCommonByInput}
        />
      </TitleBox>
      <TitleBox title="나를 더 홍보할래요!" noline>
        <Input
          name="optionalURL"
          placeholder="url 주소를 적어주세요"
          defaultValue={optionalURL}
          onBlur={updateCommonByInput}
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
