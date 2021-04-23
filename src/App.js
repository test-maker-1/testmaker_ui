import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainForm from "./components/frame/MainForm";
import MultipleMaking from "./components/frame/MultipleMaking";

import Feed from "./view/Feed";
import PickTest from "./view/PickTest";

const App = () => {
  return (
    <BrowserRouter>
      <MainForm>
        <Switch>
          <Route exact path="/" component={Feed} />

          {/* test making */}
          <Route exact path="/pick-test" component={PickTest} />
          {/* multiple */}
          <Route exact path="/test/multiple/:step" component={MultipleMaking} />
        </Switch>
      </MainForm>
    </BrowserRouter>
  );
};

export default App;
