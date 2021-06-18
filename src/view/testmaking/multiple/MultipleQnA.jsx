import React, { memo } from "react";
import styled from "styled-components";

import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { NoticeAlert, SVG } from "../../../components/common";
import { Questions, BtnAdd } from "../../../components/making";
import theme from "../../../styles/theme";

import usePage from "../../../hooks/usePage";
import useQnA from "../../../hooks/making/useQnA";
import useQuestion from "../../../hooks/making/useQuestion";

import msg from "../../../constants/msg";
import ENUM from "../../../constants/Enum";

const { errorMaking } = msg;
const { blue, white, bodyGray, darkGray } = theme.colors;

const svgStyles = {
  width: 32,
  height: 32,
  fill: blue,
};

const showAlert = (msg) =>
  NoticeAlert.open({
    icon: ENUM.WARNING,
    text: msg,
    btns: [{ name: "돌아가기" }],
  });

const MultipleQnA = () => {
  return (
    <PageContainer>
      {/* <NoticeAlert icon={ENUM.WARNING} btns={[{ name: "돌아가기" }]} /> */}

      <RandomGuide>
        <div>
          <SVG type={ENUM.CASINO} style={svgStyles} />
        </div>
        <GuideText className="guide">
          <h2>질문 생각하는 게 힘드시다구요?</h2>
          <p>주사위를 누르면 랜덤으로 제공해드려요.</p>
        </GuideText>
      </RandomGuide>

      <Questions />

      <FooterBtns />
    </PageContainer>
  );
};

const FooterBtns = memo(() => {
  const { goPage } = usePage();
  const { onSetResult } = useQnA();
  const { addEmptyQuestion, checkNextStep } = useQuestion();

  const onSubmitQnA = () => {
    if (!checkNextStep()) {
      showAlert(errorMaking.question);
      return;
    }
    if (onSetResult()) {
      goPage("/test/multiple/result");
      return;
    }
    showAlert(errorMaking.invaliedPoints);
  };

  return (
    <>
      <BtnAdd onAdd={addEmptyQuestion}>질문 추가하기</BtnAdd>
      <BottomBtn
        btnArr={[
          { name: "임시저장" },
          { name: "다 적었어요", customClick: onSubmitQnA },
        ]}
      />
    </>
  );
});

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
