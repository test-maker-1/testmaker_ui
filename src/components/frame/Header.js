import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LeftBtn from "../Header/LeftBtn";
import RightBtn from "../Header/RightBtn";

const dynamicHB = "#ffffff"; //white or opacity
const btnArea = 50;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    background: dynamicHB
  },
  side: {
    width: `${btnArea}px`
  },
  center: {
    width: `calc(100% - ${btnArea * 2}px)`,
    textAlign: "center"
  }
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
        alignItems="stretch"
      >
        <Grid item className={classes.side}>
          <LeftBtn type={leftType} />
        </Grid>
        <Grid item className={classes.center}>
          <h1>{title}</h1>
        </Grid>
        <Grid item className={classes.side}>
          <RightBtn type={rightType} onToggleMenu={onToggle} />
        </Grid>
      </Grid>
    </HeadContainer>
  );
};

//414  * 56
const HeadContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 0 20px;
  height: ${({ theme: { heights } }) => heights.header}px;
  border: 1px solid black;
`;

export default Header;
