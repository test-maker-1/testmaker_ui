import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainForm from "./components/frame/MainForm";
import Testing from "./components/frame/Testing";
import TestMaking from "./components/frame/TestMaking";

import Feed from "./view/Feed";
import PickTest from "./view/testmaking/PickTest";
import Error from "./view/Error";

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
          {/* Testing */}
          <Route exact path="/testing/:module" component={Testing} />
          <Route exact component={Error} />
        </Switch>
      </MainForm>
    </BrowserRouter>
  );
};

export default App;
