import React, { useMemo } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { TitleBox, Title, SVG, NoticeAlert } from "../../../components/common";
import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import ResultBound from "./ResultBound";
import ResultPoint from "./ResultPoint";
import theme from "../../../styles/theme";

import useResult from "../../../hooks/making/useResult";
import useQnA from "../../../hooks/making/useQnA";
import { checkResult } from "../../../utils/asyncMakingUtils";

import ENUM from "../../../constants/Enum";
import usePage from "../../../hooks/usePage";

const { PREVIEW, WARNING } = ENUM;

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
  const { isRankMode, top, updateMode } = useResult();
  const [currentMode, otherMode] = useMemo(
    () =>
      isRankMode
        ? ["점수 모드", "구간 별 결과"]
        : ["구간 별 결과", "점수 모드"],
    [isRankMode]
  );
  const classes = useStyles();

  const toggleMode = () => updateMode();

  return (
    <Container>
      <NoticeAlert icon={WARNING} btns={[{ name: "다시보기" }]} />
      <TitleBox noline>
        <TitleWrap>
          <Title>{currentMode}</Title>
          <Button
            className={classes.btnRank}
            startIcon={<SVG style={svgStyle} type={ENUM.CHANGE} />}
            onClick={toggleMode}
          >
            {otherMode}
          </Button>
        </TitleWrap>
      </TitleBox>

      {isRankMode ? <ResultPoint /> : <ResultBound />}

      <BtnWrapper isRankMode={isRankMode} top={top} />
    </Container>
  );
};

const BtnWrapper = ({ isRankMode, top }) => {
  const { results, resultsCnt, totalPoints } = useQnA();
  const { goPage } = usePage();

  const checkNextStep = () => {
    const { okResult, msg, resultError } = checkResult(
      isRankMode,
      top,
      results,
      resultsCnt,
      totalPoints
    );

    if (okResult) {
      goPage("/test/multiple/detail");
      return;
    }
    NoticeAlert.open(resultError || msg);
  };

  return (
    <BottomBtn
      btnArr={[
        { name: "임시저장" },
        { name: "다 적었어요", customClick: checkNextStep },
      ]}
    />
  );
};

const Container = styled(PageContainer)`
  .title-box {
    padding-bottom: 0;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default MultipleResult;
