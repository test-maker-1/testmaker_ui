import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";

import useUser from "../../hooks/useUser";
import useMaking from "../../hooks/useMaking";

import Error from "../../view/Error";
import components from "../../constants/testStepComponents";

const SAVE_INTAERVAL = 5000; // 임시로 5초

const TestMaking = ({
  match: {
    params: { module, step },
  },
}) => {
  const { loggedIn } = useUser();
  const { data, dispatch, initCommonData } = useMaking();

  const saveInterval = useRef({});
  const intervalLoading = useRef(false);
  const testState = useRef(data);

  useEffect(() => {
    testState.current = { ...data };

    const interval = () => {
      if (!intervalLoading.current) {
        intervalLoading.current = true;

        saveInterval.current = setTimeout(() => {
          // _saveTest(testState.current);
          console.log(testState.current);
          intervalLoading.current = false;
          interval();
        }, SAVE_INTAERVAL);
      }
    };

    if (!intervalLoading.current) interval();
  }, [data]);

  useEffect(() => {
    return () => {
      if (intervalLoading.current) {
        testState.current = {};
        dispatch(initCommonData());
        clearTimeout(saveInterval.current);
      }
    };
  }, [dispatch, initCommonData]);

  // require logIn
  if (!loggedIn) return <Error code={403} />;

  // undefined module
  if (!components.hasOwnProperty(module)) {
    return <Error />;
  }

  const makingComponent = components[module];

  // undefined step
  if (!makingComponent.hasOwnProperty(step)) {
    return <Error />;
  }

  return makingComponent[step];
};

export default withRouter(TestMaking);
