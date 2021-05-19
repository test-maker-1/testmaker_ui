import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

//#region 기본 버튼
const BtnField = ({ name, reverse, style, onClick }) => {
  const classes = useStyles({ style, reverse });

  return (
    <Button className={classes.btn} onClick={onClick}>
      {name}
    </Button>
  );
};
//#endregion

const useStyles = makeStyles((theme) => ({
  btn: (props) =>
    Object.assign(
      {
        width: "374px",
        height: "64px",
        color: "#8A929E",
        background: props.reverse ? "#fff" : "#F1F2F4",
        border: props.reverse ? "1px solid #E5E8EC" : "0px",
        borderRadius: "5px",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "28.96px",
        textAlign: "center",
      },
      props.style
    ),
}));

export default BtnField;
