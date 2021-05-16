import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { TitleBox, Title, SVG } from "../../../components/common";
import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { BtnAdd, Result } from "../../../components/making";

import { TextBox } from "../../../styles";
import theme from "../../../styles/theme";

import useMaking from "../../../hooks/useMaking";
import ENUM from "../../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const useStyles = makeStyles(() => ({
  btnRank: () => ({
    padding: 0,
    fontSize: `${theme.fontSizes.sm}rem`,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: "24px",
    color: theme.colors.blue,
    
    "& .MuiButton-startIcon": {
      marginRight: "4px !important",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  }),
}));

const svgStyle = {
  width: 24,
  height: 24,
  fill: theme.colors.blue,
};

const MultipleResult = () => {
  const {
    data: { data },
    dispatch,
    addResult,
  } = useMaking();

  const { questionsCnt, totalPoints, results } = data;
  const classes = useStyles();

  return (
    <PageContainer>
      <TitleBox noline>
        <TitleWrap>
          <Title>구간 별 결과</Title>
          <Button
            className={classes.btnRank}
            startIcon={<SVG style={svgStyle} type={ENUM.CHANGE} />}
          >
            점수 모드
          </Button>
        </TitleWrap>
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

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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

export default MultipleResult;
