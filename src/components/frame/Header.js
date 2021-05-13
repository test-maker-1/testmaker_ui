import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LeftBtn from "../Header/LeftBtn";
import RightBtn from "../Header/RightBtn";
import TitleBtn from "../Header/titleBtn";

const dynamicHB = "#ffffff"; //white or opacity
const btnArea = 50;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    background: dynamicHB,
  },
  leftSide: {
    width: `${btnArea}px`,
    textAlign: "left",
  },
  rightSide: {
    width: `${btnArea}px`,
    textAlign: "right",
  },
  center: {
    width: `calc(100% - ${btnArea * 2}px)`,
    textAlign: "center",
  },
}));

/*
 * header: object; ex) { title, leftType, rightType }
 * onToggle: function;
 */
const Header = ({ header, onToggle }) => {
  const { leftType, rightType, title } = header;
  const classes = useStyles();

  return (
    <HeadContainer>
      <Grid
        container
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.leftSide}>
          <LeftBtn type={leftType} />
        </Grid>
        <Grid item className={classes.center}>
          <TitleBtn type={title.type} title={title.title} />
        </Grid>
        <Grid item className={classes.rightSide}>
          <RightBtn type={rightType} onToggleMenu={onToggle} />
        </Grid>
      </Grid>
    </HeadContainer>
  );
};

const HeadContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 0 20px;
  height: ${({ theme: { heights } }) => heights.header}px;
  z-index: 100;
`;

export default Header;
