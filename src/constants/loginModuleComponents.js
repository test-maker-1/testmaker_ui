import {
    kakao,
    other,
    email,
    naver,
    google,
    findPw,
    emailAuth,
    pwSetting,
    complete,
    profile,
} from "../constants/urlInfo";
import Email from "../view/login/Email";
import PwEmailAuth from "../view/login/findPw/PwEmailAuth";
import PwComplete from "../view/login/findPw/PwComplete";
import PwSetting from "../view/login/findPw/PwSetting";
import Other from "../view/login/Other";
import RgEmailAuth from "../view/register/RgEmailAuth";
import RgComplete from "../view/register/RgComplete";
import RgPwSetting from "../view/register/RgPwSetting";
import RgProfile from "../view/register/RgProfile";

const findPwStep = {
    [emailAuth]: <PwEmailAuth />,
    [pwSetting]: <PwSetting />,
    [complete]: <PwComplete />,
};

export const loginComponents = {
    [kakao]: <></>,
    [other]: <Other />,
    [email]: <Email />,
    [naver]: <></>,
    [google]: <></>,
    [findPw]: findPwStep,
};

export const registerComponents = {
    [emailAuth]: <RgEmailAuth />,
    [pwSetting]: <RgPwSetting />,
    [profile]: <RgProfile />,
    [complete]: <RgComplete />,
};
