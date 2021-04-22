import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//#region 기본 버튼
export const BtnField = ({text, reverse, style, onClick}) => {
  const classes = useStyles({style, reverse});

  return (<Button className={classes.btn} onClick={onClick}>{text}</Button>);
};
//#endregion

//#region 공유 버튼
const kinds = ["kakao", "face", "insta", "url"];
export const BtnShare = ({style, onClick}) => {
  const classes = useStyles(style);
  const handleOnClick = (id, event) => {
    if(onClick) onClick(event, id);
  };

  return (
    <ShareContainer>
      {kinds.map((name, idx)=>{
        return <Button key={idx} id={name} className={classes.share} onClick={handleOnClick.bind(this, name)}>{name}</Button>
      })}
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  display: inline-block;
`;

const useStyles = makeStyles((theme) => ({
  btn: (props) => (Object.assign({
    width: "374px",
    height: "64px",
    color: "#8A929E",
    background: props.reverse ? "#fff" : "#F1F2F4",
    border: props.reverse ? "1px solid #E5E8EC" : "0px",
    borderRadius: "5px",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28.96px",
    textAlign: "center"
  }, props.style)),
  share: (props) => (Object.assign({
    width: "64px",
    height: "64px",
    background: "#F1F2F4",
    borderRadius: "25px",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    margin: "8px"
  }, props))
}));
//#endregion