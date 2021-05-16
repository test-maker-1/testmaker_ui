import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { TitleBox, Title, SVG } from "../../../components/common";
import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import ResultBound from "./ResultBound";
import ResultPoint from "./ResultPoint";
import theme from "../../../styles/theme";

import useMaking from "../../../hooks/useMaking";
import useOpen from "../../../hooks/useOpen";

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
  const { open: isRankMode, onToggle } = useOpen();

  const [currentMode, otherMode] = isRankMode
    ? ["점수 모드", "구간 별 결과"]
    : ["구간 별 결과", "점수 모드"];

  const classes = useStyles();

  const addEmptyResult = () => dispatch(addResult());

  return (
    <Container>
      <TitleBox noline>
        <TitleWrap>
          <Title>{currentMode}</Title>
          <Button
            className={classes.btnRank}
            startIcon={<SVG style={svgStyle} type={ENUM.CHANGE} />}
            onClick={onToggle}
          >
            {otherMode}
          </Button>
        </TitleWrap>
      </TitleBox>

      {/* set result by test mode */}
      {isRankMode ? (
        <ResultPoint />
      ) : (
        <ResultBound data={data} addResult={addEmptyResult} />
      )}

      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "다 적었어요", type: MOVENEXT },
        ]}
      />
    </Container>
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
