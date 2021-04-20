import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainForm from "./components/frame/MainForm"
import Feed from "./view/Feed";
import PickTest from "./view/PickTest";

const App = () => {
  return (
    <BrowserRouter>
     <MainForm>
      <Switch>
        {/* view component */}
        <Route exact path="/" component={Feed} />
        <Route exact path="/pick-test" component={PickTest} />
      </Switch>
     </MainForm>
    </BrowserRouter>
  );
};

export default App;
