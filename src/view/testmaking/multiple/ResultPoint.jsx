import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import { InputNumber, Section } from "../../../styles";
import theme from "../../../styles/theme";
import useMaking from "../../../hooks/useMaking";

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
  const {
    data: { data },
    dispatch,
    updateTypeData,
  } = useMaking();

  const onUpdate = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateTypeData({
        key: name,
        value: Number(value),
      })
    );
  };

  return (
    <Container>
      <InputSection>
        <Wrapper className="input-wrap">
          <span>점수 높은</span>
          <Button component="label" className={classes.btn} disableFocusRipple>
            <InputRank name="top" defaultValue={data.top} onBlur={onUpdate} />
          </Button>
          <span>명까지 공개할래요</span>
        </Wrapper>
      </InputSection>
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
  border-bottom: 1px solid #ebedf1;
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
