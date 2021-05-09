import React from "react";
import styled from "styled-components";

import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import ENUM from "../../../constants/Enum";

const { MOVENEXT, PREVIEW } = ENUM;

const MultipleQA = () => {
  return (
    <>
      <PageContainer>
        객관식 테스트 입력 QnA 페이지
        <BottomBtn
          btnArr={[
            { name: "미리보기", type: PREVIEW },
            { name: "다 적었어요", type: MOVENEXT },
          ]}
        />
      </PageContainer>
    </>
  );
};

export default MultipleQA;
