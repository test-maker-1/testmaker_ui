import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const [SELECTED, UNSELECTED] = ["#e5e8ec", "#f1f2f4"];

const useStyles = makeStyles((theme) => ({
  feedBtn: ({ bgColor }) => ({
    flex: 1,
    padding: "13px 0",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: "27px",
    color: "#8a929e",
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
  const bgColor =
    String(onFeed) === value ? { bgColor: SELECTED } : { bgColor: UNSELECTED };
  const classes = useStyles(bgColor);

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
