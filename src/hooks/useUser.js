import { useDispatch, useSelector } from "react-redux";
import {
  checkLogIn as checkLogInAction,
  kakaoLogIn as kakaoLogInAction,
  logOut as logOutAction,
} from "../redux/reducer/userReducer";
import { SUCCESS } from "../utils/asyncUtils";

const useUser = () => {
  const { data, status } = useSelector((state) => state.user.user);
  const loggedIn = data && status === SUCCESS;

  const dispatch = useDispatch();

  const checkLogIn = () => dispatch(checkLogInAction());
  const kakaoLogIn = (payload) => dispatch(kakaoLogInAction(payload));

  const logOut = () => dispatch(logOutAction());

  return { data, status, loggedIn, checkLogIn, kakaoLogIn, logOut };
};

export default useUser;
