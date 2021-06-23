import React, { memo } from "react";
import styled from "styled-components";

import { NoticeAlert, TitleBox } from "../../../components/common";
import { BtnAdd, Result } from "../../../components/making";
import { TextBox } from "../../../styles";

import useQnA from "../../../hooks/making/useQnA";
import ENUM from "../../../constants/Enum";

const showAlert = (text) => {
  NoticeAlert.open({
    icon: ENUM.WARNING,
    text,
    btns: [{ name: "확인" }],
  });
};

const ResultBound = () => {
  const {
    questionsCnt,
    totalPoints,
    results,
    addEmptyResult,
    handleDeleteResult,
  } = useQnA();

  const addResult = () => {
    if (!addEmptyResult()) showAlert("결과 개수가 너무 많아요!");
  };

  const deleteResult = (idx) => {
    if (!handleDeleteResult(idx)) showAlert("결과는 1개 이상 있어야 해요!");
  };

  return (
    <Container>
      <TitleBox>
        <TextBox>
          <Summary type="questions" value={questionsCnt} />
          <Summary type="points" value={totalPoints} />
        </TextBox>
      </TitleBox>

      {results.map((result, idx) => (
        <Result
          key={result.resultId}
          resultIdx={idx}
          result={result}
          deleteResult={deleteResult}
          openAlert={(msg) => showAlert(msg)}
        />
      ))}

      <BtnAdd onAdd={addResult}>결과 추가하기</BtnAdd>
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
