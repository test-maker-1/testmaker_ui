import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginFrame from "./components/frame/Login";
import RegisterFrame from "./components/frame/Register";
import Login from "./view/login/Login";

import MainForm from "./components/frame/MainForm";
import Testing from "./components/frame/Testing";
import TestMaking from "./components/frame/TestMaking";
import Feed from "./view/Feed";
import PickTest from "./view/testmaking/PickTest";
import Error from "./view/Error";
import useUser from "./hooks/useUser";

const App = () => {
  const { checkLogIn } = useUser();

  useEffect(() => checkLogIn(), []);

  return (
    <BrowserRouter>
      <MainForm>
        <Switch>
          <Route exact path="/" component={Feed} />
          {/* test making */}
          <Route exact path="/test/pick-test" component={PickTest} />
          {/* module: multiple, mbti, weight */}
          <Route exact path="/test/:module/:step" component={TestMaking} />
          {/* login */}
          <Route exact path="/login" component={Login} />
          {/* module: kakao, other, naver, google, email */}
          <Route exact path="/login/:module/:step?" component={LoginFrame} />
          {/* register */}
          <Route exact path="/register/:module" component={RegisterFrame} />
          {/* Testing */}
          <Route exact path="/testing/:module" component={Testing} />
          <Route exact component={Error} />
        </Switch>
      </MainForm>
    </BrowserRouter>
  );
};

export default App;
