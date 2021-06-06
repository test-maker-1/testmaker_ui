import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  checkLogIn as checkLogInAction,
  kakaoLogIn as kakaoLogInAction,
  logOut as logOutAction,
} from "../redux/reducer/userReducer";
import { INIT, LOADING, SUCCESS } from "../utils/asyncUtils";

const useUser = () => {
  const { selectedTab, tabTests } = useSelector((state) => state.user);
  const { data, status } = useSelector((state) => state.user.user);
  const logInLoading = useMemo(
    () => [LOADING, INIT].includes(status),
    [status]
  ); // 로그인 요청 중
  const loggedIn = useMemo(
    () => status === SUCCESS && data !== null,
    [data, status]
  ); // 로그인 상태

  const dispatch = useDispatch();

  const checkLogIn = () => dispatch(checkLogInAction());
  const kakaoLogIn = (payload) => dispatch(kakaoLogInAction(payload));

  const logOut = () => dispatch(logOutAction());

  return {
    data,
    status,
    loggedIn,
    logInLoading,
    checkLogIn,
    kakaoLogIn,
    logOut,
    selectedTab,
    tabTests,
  };
};

export default useUser;
