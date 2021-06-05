import React, { memo } from "react";
import styled from "styled-components";

import { NoticeAlert, TitleBox } from "../../../components/common";
import { BtnAdd, Result } from "../../../components/making";
import { TextBox } from "../../../styles";

import useQnA from "../../../hooks/making/useQnA";
import ENUM from "../../../constants/Enum";

const ResultBound = () => {
  const {
    questionsCnt,
    totalPoints,
    results,
    addEmptyResult,
    handleDeleteResult,
  } = useQnA();

  const addResult = () => {
    if (!addEmptyResult()) NoticeAlert.open("결과 개수가 너무 많아요!");
  };

  const deleteResult = (idx) => {
    if (!handleDeleteResult(idx))
      NoticeAlert.open("결과는 1개 이상 있어야 해요!");
  };

  return (
    <Container>
      {/* alert */}
      <NoticeAlert icon={ENUM.WARNING} btns={[{ name: "돌아가기" }]} />
      <TitleBox>
        <TextBox>
          {/* summary */}
          <Summary type="questions" value={questionsCnt} />
          <Summary type="points" value={totalPoints} />
        </TextBox>
      </TitleBox>
      {/* result */}
      {results.map((result, idx) => (
        <Result
          key={result.resultId}
          resultIdx={idx}
          result={result}
          deleteResult={deleteResult}
          openAlert={NoticeAlert.open}
        />
      ))}
      <BtnAdd target="결과" onClick={addResult} />
    </Container>
  );
};

/*
 * type: string; ex) question || result;
 * value: number;
 */
const Summary = memo(({ type, value }) => {
  const [name, end] = type === "questions" ? ["질문", "개"] : ["점수", "점"];
  return (
    <div>
      <SummaryText>
        <span>총 {name}</span>
        <strong>{value}</strong>
        {end}
      </SummaryText>
    </div>
  );
});

const Container = styled.div`
  .title-box {
    padding-top: 0;
    padding-bottom: 25px !important;
  }
`;

const SummaryText = styled.div`
  text-align: center;
  span {
    margin-right: 8px;
  }
  strong {
    font-weight: bold;
  }
`;

export default ResultBound;
