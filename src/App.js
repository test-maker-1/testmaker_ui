/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

// import LoginFrame from "./components/frame/Login";
import RegisterFrame from "./components/frame/Register";
import MainForm from "./components/frame/MainForm";
import Testing from "./components/frame/Testing";
import TestMaking from "./components/frame/TestMaking";
import { Loading } from "./components/common";

import Login from "./view/login/Login";
import Error from "./view/Error";
import Feed from "./view/Feed";
import PickTest from "./view/testmaking/PickTest";
import TestRelease from "./view/testmaking/TestRelease";

import { initFeed } from "./redux/reducer/feedReducer";
import useUser from "./hooks/useUser";
import { LOADING } from "./utils/asyncUtils";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import initialize from "./utils/initialize";

const App = () => {
  const { checkLogIn, status } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    checkLogIn();
    initialize();
    dispatch(initFeed());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Loading loading={status === LOADING} />
      <MainForm>
        <Switch>
          <Route exact path="/" component={Feed} />
          {/* test making */}
          <Route exact path="/test/pick-test" component={PickTest} />
          <Route exact path="/test/release" component={TestRelease} />
          {/* module: multiple, mbti, weight */}
          <Route exact path="/test/:module/:step" component={TestMaking} />
          {/* login */}
          <Route exact path="/login" component={Login} />
          {/* module: kakao, other, naver, google, email */}
          {/* <Route exact path="/login/:module/:step?" component={LoginFrame} /> */}
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
