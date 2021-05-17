import React, { memo } from "react";
import styled from "styled-components";

import { TitleBox } from "../../../components/common";
import { BtnAdd, Result } from "../../../components/making";
import { TextBox } from "../../../styles";

import useMaking from "../../../hooks/useMaking";
import { getPointBoundList } from "../../../utils/constHandler";

const ResultBound = ({ data, addResult }) => {
  const { questionsCnt, totalPoints, results, resultsCnt } = data;
  const { dispatch, updateResult, deleteResult } = useMaking();

  const addEmptyResult = () => {
    const pointBoundList = getPointBoundList(totalPoints, resultsCnt + 1);
    if (!pointBoundList) {
      alert("결과 개수가 너무 많아요!"); // 임시 alert
      return;
    }
    addResult();
    pointBoundList.forEach((bound, idx) => {
      updateResult("pointBound", bound, idx);
    });
  };

  const handleDeleteResult = (idx) => {
    const pointBoundList = getPointBoundList(totalPoints, resultsCnt - 1);
    dispatch(deleteResult(idx));
    pointBoundList.forEach((bound, idx) => {
      updateResult("pointBound", bound, idx);
    });
  };

  return (
    <Container>
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
          key={`${idx}-${result.title}`}
          resultIdx={idx}
          result={result}
          deleteResult={handleDeleteResult}
        />
      ))}
      <BtnAdd target="결과" onClick={addEmptyResult} />
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
