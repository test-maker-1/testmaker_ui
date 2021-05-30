import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import theme from "../../styles/theme";

const { blue, skyBlue } = theme.colors;

const btnColors = {
  selected: {
    bgColor: blue,
    color: "white",
  },
  unselected: {
    bgColor: skyBlue,
    color: blue,
  },
};

const useStyles = makeStyles(() => ({
  feedBtn: ({ bgColor, color }) => ({
    flex: 1,
    padding: "13px 0",
    fontSize: `${theme.fontSizes.lg}rem`,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: "27px",
    color: color,
    border: "none",
    backgroundColor: bgColor,
    "&:hover": {
      backgroundColor: bgColor,
    },
  }),
}));

/*
 * onFeed: boolean || string;
 * value: string;
 * onClick: function;
 */
const FeedBtn = ({ onFeed, value, onClick, children }) => {
  const [boolOnFeed, boolValue] = [JSON.parse(onFeed), JSON.parse(value)];
  const btnStyles =
    boolOnFeed === boolValue ? btnColors.selected : btnColors.unselected;
  const classes = useStyles(btnStyles);

  return (
    <Button className={classes.feedBtn} value={value} onClick={onClick}>
      {children}
    </Button>
  );
};

export default FeedBtn;
