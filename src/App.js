import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainForm from "./components/frame/MainForm";
import TestMaking from "./components/frame/TestMaking";

import Feed from "./view/Feed";
import PickTest from "./view/testmaking/PickTest";

const App = () => {
  return (
    <BrowserRouter>
      <MainForm>
        <Switch>
          <Route exact path="/" component={Feed} />
          {/* test making */}
          <Route exact path="/test/pick-test" component={PickTest} />
          {/* module: multiple, mbti, weight */}
          <Route exact path="/test/:module/:step" component={TestMaking} />
        </Switch>
      </MainForm>
    </BrowserRouter>
  );
};

export default App;
