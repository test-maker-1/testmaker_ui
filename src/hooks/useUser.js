import { useDispatch, useSelector } from "react-redux";
import { kakaoLogIn as kakaoLogInAction } from "../redux/reducer/userReducer";

const useUser = () => {
  const { data, status } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const kakaoLogIn = (payload) => dispatch(kakaoLogInAction(payload));

  return { data, status, kakaoLogIn };
};

export default useUser;
