import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import theme from "../../styles/theme";

const { blue, deepGray, ghostGray } = theme.colors;

const btnColors = {
  selected: {
    bgColor: blue,
    color: "white",
  },
  unselected: {
    bgColor: "white",
    color: deepGray,
  },
};

const useStyles = makeStyles((theme) => ({
  feedBtn: ({ bgColor, color }) => ({
    flex: 1,
    padding: "13px 0",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: "27px",
    color: color,
    border: `1px solid ${ghostGray}`,
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
  const btnStyles =
    String(onFeed) === value ? btnColors.selected : btnColors.unselected;
  const classes = useStyles(btnStyles);

  return (
    <Button
      className={classes.feedBtn}
      name="onFeed"
      value={value}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FeedBtn;
