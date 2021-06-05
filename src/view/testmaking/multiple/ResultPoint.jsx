import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import { InfoText, RankingList } from "../../../components/common";
import { InputNumber, Section } from "../../../styles";
import theme from "../../../styles/theme";

import useResult from "../../../hooks/making/useResult";

const userRanking = [
  {
    name: "닉네임A",
    point: 8,
  },
  {
    name: "닉네임B",
    point: 7,
  },
  {
    name: "닉네임C",
    point: 6,
  },
  {
    name: "닉네임D",
    point: 5,
  },
  {
    name: "닉네임E",
    point: 4,
  },
];

const useStyles = makeStyles(() => ({
  btn: () => ({
    padding: "6px 10px",
    margin: "0 10px",
    width: "min-content",
    fontSize: `${theme.fontSizes.lg}rem`,
    fontWeight: "bold",
    letterSpacing: -0.6,
    lineHeight: "27px",
    borderRadius: 5,
    backgroundColor: theme.colors.skyBlue,
    "&:hover": {
      backgroundColor: theme.colors.skyBlue,
    },
  }),
}));

const ResultPoint = () => {
  const classes = useStyles();

  const { top, updateTop } = useResult();

  const onUpdate = (e) => updateTop(e.target.value);

  return (
    <Container>
      <InputSection>
        <Wrapper className="input-wrap">
          <span>점수 높은</span>
          {/* input top */}
          <Button component="label" className={classes.btn} disableFocusRipple>
            <InputRank name="top" defaultValue={top} onBlur={onUpdate} />
          </Button>
          <span>명까지 공개할래요</span>
        </Wrapper>
      </InputSection>
      {/* ranking */}
      <RankingList top={5} userRanking={userRanking} noline />
      <Section>
        <InfoText text="점수 모드 예시화면이에요" color="blue" />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  .title-box {
    padding-bottom: 25px !important;
  }
`;

const InputSection = styled(Section)`
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.ghostGray};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
    line-height: 27px;
    letter-spacing: -0.6px;
    color: ${({ theme: { colors } }) => colors.bodyGray};
  }
`;

const InputRank = styled(InputNumber)`
  width: 100%;
  text-align: left;
  color: ${theme.colors.blue};
`;

export default ResultPoint;
