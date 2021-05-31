import React, { useEffect } from "react";
import styled from "styled-components";

import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { NoticeAlert, SVG } from "../../../components/common";
import { Question, BtnAdd } from "../../../components/making";
import theme from "../../../styles/theme";

import useMaking from "../../../hooks/useMaking";
import usePage from "../../../hooks/usePage";

import { getPointBoundList } from "../../../utils/constHandler";
import ENUM from "../../../constants/Enum";

const { blue, white, bodyGray, darkGray } = theme.colors;
const currentStep = "qna";

const svgStyles = {
  width: 32,
  height: 32,
  fill: blue,
};

const MultipleQnA = () => {
  const {
    questions = [],
    questionsCnt,
    addEmptyQuestion,
    onSetResult,
  } = useQnA();

  return (
    <PageContainer>
      {/* alert sample */}
      <NoticeAlert icon={ENUM.WARNING} btns={[{ name: "돌아가기" }]} />
      {/* random guide */}
      <RandomGuide>
        <div>
          <SVG type={ENUM.CASINO} style={svgStyles} />
        </div>
        <GuideText className="guide">
          <h2>질문 생각하는 게 힘드시다구요?</h2>
          <p>주사위를 누르면 랜덤으로 제공해드려요.</p>
        </GuideText>
      </RandomGuide>
      {/* questions */}
      {questions.map((question, idx) => (
        <Question
          key={question.questionId}
          questionIdx={idx}
          questionsCnt={questionsCnt}
          data={question}
          openAlert={NoticeAlert.open}
        />
      ))}
      <BtnAdd onClick={addEmptyQuestion} />

      <BottomBtn
        btnArr={[
          { name: "미리보기", type: ENUM.PREVIEW },
          { name: "다 적었어요", customClick: onSetResult },
        ]}
      />
    </PageContainer>
  );
};

const useQnA = () => {
  const { data, dispatch, initResult, updateStep, addQuestion } = useMaking();
  const { goPage } = usePage();

  useEffect(() => {
    if (data.step !== currentStep) updateStep(currentStep);
  }, [data.step, updateStep]);

  const {
    data: { questions = [], questionsCnt, resultsCnt },
  } = data;

  const addEmptyQuestion = () => dispatch(addQuestion());

  const onSetResult = () => {
    const totalPoints = questions.reduce((prevPoint, { point }) => {
      const currentPoint = point ? point : 0;
      return prevPoint + currentPoint;
    }, 0);

    if (totalPoints < resultsCnt - 1) {
      NoticeAlert.open("테스트 총 점수가 너무 적어요!");
      return;
    }

    const pointBoundList = getPointBoundList(totalPoints, resultsCnt);
    const baseResults = [...data.data.results];
    const updateResults = baseResults.map((result, idx) => {
      return { ...result, pointBound: { ...pointBoundList[idx] } };
    });
    initResult(totalPoints, updateResults);

    goPage("/test/multiple/result");
  };

  return {
    questions,
    questionsCnt,
    addEmptyQuestion,
    onSetResult,
  };
};

const RandomGuide = styled.section`
  margin-bottom: 24px;
  padding: 18px ${({ theme: { paddings } }) => paddings.main}rem;
  display: flex;
  align-items: center;
  background-color: ${white};
`;

const GuideText = styled.div`
  margin-left: 12px;

  h2 {
    font-weight: bold;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl}rem;
    line-height: 30px;
    letter-spacing: -1px;
    color: ${darkGray};
  }

  p {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: ${bodyGray};
  }
`;

export default MultipleQnA;
