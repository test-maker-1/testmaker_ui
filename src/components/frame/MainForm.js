import React, {useMemo} from 'react';
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Header from "./Header";
import BottomBtn from "./BottomBtn";

//js 모듈 분리도 가능
const getConfiguration = (plocation) => {

  let title = "";
  let buttons = [];

  if(plocation.pathname === "/"){
    title = "TEST MAKER";
    buttons = ["테스트 만들기 도전"];
  }

  return {title, buttons};
};

const MainForm = ({children, history, location, match}) => {
  const {title, buttons} = useMemo(() => getConfiguration(location),[location]);

console.log(children,history,location,match, title, buttons);
  return (
    <BackGround>
      <MainBox>
        {title.length > 0 && 
          <Header title={title}/>
        }
        <Main hnt={title.length > 0} bnt={buttons.length > 0}>
          {children}
        </Main>
        {buttons.length > 0 &&
          <BottomBtn buttons={buttons}/>
        }
      </MainBox>
    </BackGround>
  );
};

const BackGround = styled.div`
  min-height: 100%;
  background: #e6e6e6;
`;

const MainBox = styled.div`
  position: relative;
  margin: 0px auto;
  width: min(414px, 100%);
  height: 100%;
  background: #ffffff;
`;

const Main = styled.main`
  padding: ${({bnt}) => bnt ? "0 20px 80px 20px" : "0 20px 0px"};
  min-height: calc(100vh - ${({hnt, bnt}) => hnt && bnt ? "140px" : !(hnt && bnt) ? "0px" : "60px"});
  display: flex;

  /* view component */
  & > div {
    flex: 1;
  }
`;

export default withRouter(MainForm);