import React from "react";
import styled from "styled-components";

import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { SVG } from "../../../components/common";
import { BtnAdd } from "../../../components/making";

import theme from "../../../styles/theme";
import ENUM from "../../../constants/Enum";

const { MOVENEXT, PREVIEW, CASINO } = ENUM;

const { blue, white, bodyGray, darkGray } = theme.colors;

const svgStyles = {
  width: 32,
  height: 32,
  fill: blue,
};

const MultipleQnA = () => {
  return (
    <PageContainer>
      {/* random guide */}
      <RandomGuide>
        <div>
          <SVG type={CASINO} style={svgStyles} />
        </div>
        <GuideText className="guide">
          <h2>질문 생각하는 게 힘드시다구요?</h2>
          <p>주사위를 누르면 랜덤으로 제공해드려요.</p>
        </GuideText>
      </RandomGuide>
      <BtnAdd />
      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "다 적었어요", type: MOVENEXT },
        ]}
      />
    </PageContainer>
  );
};

const RandomGuide = styled.section`
  padding: 18px ${({ theme: { paddings } }) => paddings.main}px;
  display: flex;
  align-items: center;
  background-color: ${white};
`;

const GuideText = styled.div`
  margin-left: 12px;

  h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -1px;
    color: ${darkGray};
  }

  p {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: ${bodyGray};
  }
`;

export default MultipleQnA;
