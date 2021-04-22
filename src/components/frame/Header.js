import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

const Header = ({ title, open, setOpen }) => {
  const classes = useStyles();

  return (
    <HeadContainer>
      <Grid container className={classes.container} direction="row" justify="center" alignItems="stretch">
        <Grid item className={classes.side}>
          <LeftBtn>A</LeftBtn>
        </Grid>
        <Grid item className={classes.center}>
          <h1>{title}</h1>
        </Grid>
        <Grid item className={classes.side}>
          <RightBtn onClick={() => setOpen(!open)}>B</RightBtn>
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

const LeftBtn = styled.button`
  width: 10px;
  height: 10px;
`;

const RightBtn = styled.button`
  width: 10px;
  height: 10px;
`;

export default Header;
