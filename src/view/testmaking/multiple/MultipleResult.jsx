import React from "react";
import styled from "styled-components";

import { TitleBox } from "../../../components/common";
import BottomBtn from "../../../components/frame/BottomBtn";
import { TextBox } from "../../../styles";

import ENUM from "../../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const MultipleResult = () => {
  return (
    <div>
      <TitleBox title="구간 별 결과" noline>
        <TextBox>
          {/* summary */}
          <Summary type="question" value={6} />
          <Summary type="result" value={8} />
        </TextBox>
      </TitleBox>
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "다 적었어요", type: MOVENEXT },
        ]}
      />
    </div>
  );
};

const Summary = ({ type, value }) => {
  const key = type === "question" ? "질문" : "점수";

  return (
    <div>
      <SummaryText>
        <span>총 {key}</span>
        <strong>{value}</strong>개
      </SummaryText>
    </div>
  );
};

const SummaryText = styled.div`
  text-align: center;

  span {
    margin-right: 8px;
  }

  strong {
    font-weight: bold;
  }
`;

export default MultipleResult;
