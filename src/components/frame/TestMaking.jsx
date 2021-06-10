import React, { useCallback, useRef, useEffect, memo } from "react";
import { withRouter } from "react-router-dom";

import Error from "../../view/Error";
import useUser from "../../hooks/useUser";
import useOpen from "../../hooks/useOpen";

import { ERROR, saveTest } from "../../utils/asyncUtils";
import components from "../../constants/testStepComponents";
import useCommon from "../../hooks/making/useCommon";

const SAVE_INTAERVAL = 1000 * 60; // 자동 임시저장 간격 60초

const TestMaking = ({
  match: {
    params: { module, step },
  },
}) => {
  // state hooks
  const { logInLoading, loggedIn } = useUser();
  const { data, dispatch, initCommon, updateStep } = useCommon();
  const { open: error, onOpen: onError } = useOpen();

  // timer utils
  const saveTimer = useRef({});
  const intervalLoading = useRef(false);
  const testState = useRef(data);

  const initTimer = useCallback(
    (initMaker = false) => {
      if (data.testId) dispatch(initCommon(initMaker));
      if (intervalLoading.current) intervalLoading.current = false;

      testState.current = {};
      clearTimeout(saveTimer.current);
    },
    [data.testId, dispatch, initCommon]
  );

  const interval = useCallback(() => {
    const { testId } = testState.current;

    if (!intervalLoading.current && testId) {
      intervalLoading.current = true;

      saveTimer.current = setTimeout(async () => {
        if (testId !== null) {
          const status = await saveTest(testState.current);
          if (status === ERROR) {
            onError();
            return;
          }
        }
        intervalLoading.current = false;
        interval();
      }, SAVE_INTAERVAL);
    }
  }, [onError]);

  useEffect(() => {
    testState.current = { ...data };

    if (!loggedIn || error) initTimer(error);
    if (!intervalLoading.current && loggedIn) interval();
    // run timer
  }, [data, error, initTimer, interval, loggedIn]);

  useEffect(() => {
    return () => {
      if (intervalLoading.current) initTimer(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => updateStep(step), [step, updateStep]);

  // undefined module
  if (!components.hasOwnProperty(module)) return <Error />;
  // undefined step
  const makingComponent = components[module];
  if (!makingComponent.hasOwnProperty(step)) return <Error />;

  // logIn loading or require logIn
  if (logInLoading) return null;
  if (!loggedIn) return <Error code={403} />;
  // invalied step
  if (!data.testId) return <Error code={406} />;
  // server error
  if (error) return <Error code={500} />;

  return makingComponent[step];
};

export default withRouter(memo(TestMaking));
