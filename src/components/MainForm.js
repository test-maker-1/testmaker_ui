import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header";
import BottomBtn from "./BottomBtn";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  min-width: 430px;
  background: #e6e6e6;
`;
const MainBox = styled.div`
  width: 414px;
  height: 100%;
  margin: 0px auto;
  background: #ffffff;
  position: relative;
`;

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%"
  },
  header: {
    flexGrow: 0
  },
  content: {
    flexGrow: 1
  }
}));

const MainForm = (props) => {
  const {noHead, noBtn, children} = props;
  const classes = useStyles();

console.log(children, props);
  return (
    <BackGround>
      <MainBox>
        <Grid
          container
          className={classes.container}
          direction="column"
          justify="space-between"
          alignItems="stretch"
          spacing={0}
        >
          {!noHead &&
            <Grid item className={classes.header}>
              <Header />
            </Grid>
          }
          <Grid item className={classes.content}>
            {children}
          </Grid>
          {!noBtn &&
            <BottomBtn />
          }
        </Grid>
      </MainBox>
    </BackGround>
  );
};

export default MainForm;