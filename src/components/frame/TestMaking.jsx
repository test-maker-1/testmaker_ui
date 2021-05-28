import React, { useCallback, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Error from "../../view/Error";
import MakingAPI from "../../api/makingAPI";
import useUser from "../../hooks/useUser";
import useMaking from "../../hooks/useMaking";
import useOpen from "../../hooks/useOpen";

import { ERROR, LOADING } from "../../utils/asyncUtils";
import components from "../../constants/testStepComponents";

const SAVE_INTAERVAL = 1000 * 30; // 임시저장 간격 30초

const TestMaking = ({
  match: {
    params: { module, step },
  },
}) => {
  // state hooks
  const { loggedIn, status } = useUser();
  const { data, dispatch, initCommonData } = useMaking();
  const { open: error, onOpen: onError } = useOpen();

  // timer utils
  const saveTimer = useRef({});
  const intervalLoading = useRef(false);
  const testState = useRef(data);

  const initTimer = useCallback(
    (initMaker = false) => {
      if (data.testId) dispatch(initCommonData(initMaker));
      if (intervalLoading.current) intervalLoading.current = false;

      testState.current = {};
      clearTimeout(saveTimer.current);
    },
    [data.testId, dispatch, initCommonData]
  );

  const interval = useCallback(() => {
    testState.current = { ...data };

    if (!intervalLoading.current && data.testId) {
      intervalLoading.current = true;

      saveTimer.current = setTimeout(async () => {
        if (testState.current.testId !== null) {
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
  }, [data, onError]);

  useEffect(() => {
    if (!loggedIn || error) initTimer(error);
    if (!intervalLoading.current && loggedIn) interval(); // run timer
  }, [error, initTimer, interval, loggedIn]);

  useEffect(() => {
    return () => {
      if (intervalLoading.current) initTimer(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // undefined module
  if (!components.hasOwnProperty(module)) return <Error />;
  // undefined step
  const makingComponent = components[module];
  if (!makingComponent.hasOwnProperty(step)) return <Error />;

  // invalied step
  if (!data.testId) return <Error code={406} />;
  // require logIn
  if (!loggedIn && status !== LOADING) return <Error code={403} />;
  // server error
  if (error) return <Error code={500} />;

  return (
    <>
      {status === LOADING ? (
        <p>로딩 중 (로그인 판별 중) ...</p>
      ) : (
        makingComponent[step]
      )}
    </>
  ); // 로딩 필요한 지?
};

const saveTest = async (params) => {
  const { status } = await MakingAPI.saveTest(params);
  return status;
};

export default withRouter(TestMaking);
