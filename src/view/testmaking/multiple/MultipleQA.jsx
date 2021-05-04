import React from "react";
import styled from "styled-components";
import { Option, AddOptionBtn } from "../../../components/common";
import BottomBtn from "../../../components/frame/BottomBtn";
import ENUM from "../../../constants/Enum";

const { MOVENEXT, PREVIEW } = ENUM;

const MultipleQA = () => {
  return (
    <Container>
      <Option questionId={1} value="보라카이" answer="제주도" />
      <Option questionId={1} value="제주도" answer="제주도" />
      <Option questionId={1} value="스페인" answer="제주도" />
      <Option questionId={1} value="발리" answer="제주도" />
      <AddOptionBtn />
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "다 적었어요", type: MOVENEXT },
        ]}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MultipleQA;
