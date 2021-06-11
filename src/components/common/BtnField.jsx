import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import theme from "../../styles/theme";
import { lg } from "../../constants/Enum";

const { blue, skyBlue, white, bodyGray } = theme.colors;

const commonUseStyles = {
  padding: 13.5,
  borderRadius: 8,
  letterSpacing: -0.6,
};

const btnColors = {
  blue: {
    bgColor: blue,
    color: "white",
  },
  skyBlue: {
    bgColor: skyBlue,
    color: blue,
  },
  gray: {
    bgColor: white,
    color: bodyGray,
  },
};

const btnSizes = {
  lg: {
    padding: 13.5,
    fontSize: `${theme.fontSizes.lg}rem`,
    lineHeight: "27px",
  },
  md: {
    padding: 12,
    fontSize: `${theme.fontSizes.md}rem`,
    lineHeight: "24px",
  },
};

/* #region 기본 버튼
 * name, value, type: string; ex) submit
 * color: ex) blue || skyBlue || gray
 * size: ex) md || lg
 */
export const BtnField = ({
  name = null,
  value = null,
  type = null,
  color = "blue",
  size = lg,
  onClick,
  children,
}) => {
  const classes = useStyles({ color, size });
  return (
    <Button
      fullWidth={true}
      className={classes.btn}
      type={type}
      name={name}
      value={value}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
//#endregion

//#region 테스트 버튼
export const BtnExam = ({ name, clicked, onClick }) => {
  // 이미 선택한 답변일 경우 색 변경 로직 필요
  const color = clicked ? "skyBlue" : "gray";
  const classes = useStyles({ color: color, size: lg, isTestBtn: true });
  return (
    <Button fullWidth={true} className={classes.btn} onClick={onClick}>
      {name}
    </Button>
  );
};
//#endregion

const useStyles = makeStyles(() => ({
  btn: ({ color, size, isTestBtn = false }) => ({
    ...commonUseStyles,
    marginBottom: isTestBtn ? 16 : 0,
    padding: btnSizes[size].padding,
    fontWeight: isTestBtn ? "normal" : "bold",
    fontSize: btnSizes[size].fontSize,
    background: btnColors[color].bgColor,
    color: btnColors[color].color,

    "&:hover": {
      transition: "0s",
      background: isTestBtn
        ? btnColors["blue"].bgColor
        : btnColors[color].bgColor,
      color: isTestBtn ? "white" : btnColors[color].color,
    },
    "&:active": {
      // isTestBtn = true일 때 스타일 변경 로직 필요
    },
  }),
}));
