import React from "react";
import styled from "styled-components";

import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import Error from "../../../view/Error";
import { SVG } from "../../../components/common";
import { Question, BtnAdd } from "../../../components/making";
import theme from "../../../styles/theme";

import useMaking from "../../../hooks/useMaking";
import ENUM, { multiple } from "../../../constants/Enum";

const { MOVENEXT, PREVIEW, CASINO } = ENUM;
const { blue, white, bodyGray, darkGray } = theme.colors;

const svgStyles = {
  width: 32,
  height: 32,
  fill: blue,
};

const MultipleQnA = () => {
  const { data, dispatch, addQuestion } = useMaking();

  // redirection step
  if (!data.hasOwnProperty("type") || data.type !== multiple)
    return <Error code={401} />;

  const {
    type,
    data: { questions = [] },
  } = data;

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

      {/* questions */}
      {questions.map((question, idx) => (
        <Question
          key={`${idx}-${question.question}`}
          questionIdx={idx}
          data={question}
        />
      ))}
      <BtnAdd onClick={() => dispatch(addQuestion())} />

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
  margin-bottom: 24px;
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
