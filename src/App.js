import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import BottomBtn from "./components/BottomBtn";
import Feed from "./view/Feed";
import PickTest from "./view/PickTest";

const App = () => {
  return (
    <BrowserRouter>
      <BackGround>
        <MainBox>
          <Header />
          <Main>
            <Switch>
              {/* view component */}
              <Route exact path="/" component={Feed} />
              <Route exact path="/pick-test" component={PickTest} />
            </Switch>
          </Main>
          <BottomBtn />
        </MainBox>
      </BackGround>
    </BrowserRouter>
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
  padding: 0 20px 80px 20px;
  min-height: calc(100vh - 140px);
  display: flex;

  /* view component */
  & > div {
    flex: 1;
  }
`;

export default App;
