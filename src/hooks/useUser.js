import { useDispatch, useSelector } from "react-redux";
import {
  checkLogIn as checkLogInAction,
  kakaoLogIn as kakaoLogInAction,
} from "../redux/reducer/userReducer";

const useUser = () => {
  const { data, status } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const checkLogIn = () => dispatch(checkLogInAction());
  const kakaoLogIn = (payload) => dispatch(kakaoLogInAction(payload));

  return { data, status, checkLogIn, kakaoLogIn };
};

export default useUser;
