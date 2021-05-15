import React, { useMemo } from "react";
import styled from "styled-components";

import { TitleBox } from "../../../components/common";
import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { BtnAdd, Result } from "../../../components/making";
import { TextBox } from "../../../styles";

import useMaking from "../../../hooks/useMaking";
import ENUM from "../../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const MultipleResult = () => {
  const {
    data: { data },
    dispatch,
    addResult,
  } = useMaking();

  const { questionsCnt, questions, results } = data;

  const sumPoint = useMemo(() => {
    return questions.reduce((prevPoint, { point }) => {
      const currentPoint = point ? point : 0;
      return prevPoint + currentPoint;
    }, 0);
  }, [questions]);

  return (
    <PageContainer>
      <TitleBox title="구간 별 결과" noline>
        <TextBox>
          {/* summary */}
          <Summary type="question" value={questionsCnt} />
          <Summary type="result" value={sumPoint} />
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
      <BtnAdd target="결과" onClick={() => dispatch(addResult())} />

      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "다 적었어요", type: MOVENEXT },
        ]}
      />
    </PageContainer>
  );
};

/*
 * type: string; ex) question || result;
 * value: number;
 */
const Summary = ({ type, value }) => {
  const [name, end] = type === "question" ? ["질문", "개"] : ["점수", "점"];
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
