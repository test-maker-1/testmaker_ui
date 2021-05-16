import React from "react";
import styled from "styled-components";
import { TitleBox } from "../../../components/common";

import { BtnAdd, Result } from "../../../components/making";
import { TextBox } from "../../../styles";

const ResultBound = ({ data, addResult }) => {
  const { questionsCnt, totalPoints, results } = data;

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
const Summary = ({ type, value }) => {
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
};

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
