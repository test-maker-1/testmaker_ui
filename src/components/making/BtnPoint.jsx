import React, { memo } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import useMaking from "../../hooks/useMaking";
import theme from "../../styles/theme";

const { blue, skyBlue, white, gray } = theme.colors;

const btnColors = {
  selected: {
    bgColor: skyBlue,
    color: blue,
  },
  unselected: {
    bgColor: white,
    color: gray,
  },
};

const useStyles = makeStyles(() => ({
  btn: ({ bgColor, color }) => ({
    padding: "6px 0",
    fontSize: `${theme.fontSizes.sm}rem`,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: "24px",
    color: color,
    backgroundColor: bgColor,

    "&:hover": {
      backgroundColor: bgColor,
    },
  }),
}));

/*
 * questionIdx: number;
 * point: number;
 */
const BtnPoint = ({ questionIdx, point }) => {
  const { updateQuestion } = useMaking();

  const onSetPoint = (e) => {
    const { name, value } = e.currentTarget;
    updateQuestion(name, Number(value), questionIdx);
  };

  return (
    <BtnGroup>
      <Btn point={point} value={1} onClick={onSetPoint} />
      <Btn point={point} value={2} onClick={onSetPoint} />
      {/* <Btn point={point} /> */}
    </BtnGroup>
  );
};

const Btn = memo(({ point = null, value, editable = false, onClick }) => {
  const btnStyle =
    point && point === Number(value)
      ? btnColors.selected
      : btnColors.unselected;

  const classes = useStyles(btnStyle);

  if (!editable)
    return (
      <Button
        name="point"
        className={classes.btn}
        value={value}
        onClick={onClick}
      >{`${value}점`}</Button>
    );

  return (
    <Button name="point" className={classes.btn} value={value}>
      직접 입력
    </Button>
  );
});

const BtnGroup = styled(ButtonGroup)`
  margin-bottom: 16px;
  width: 100%;
  border: none;

  button {
    flex: 1;
    border: none;
  }
`;

export default memo(BtnPoint);
