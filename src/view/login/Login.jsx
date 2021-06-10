import React, { useEffect } from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";

import { NoticeAlert, SVG } from "../../components/common";
import useUser from "../../hooks/useUser";
import usePage from "../../hooks/usePage";

import { key } from "../../constants/config";
import ENUM, { KAKAO } from "../../constants/Enum";
import kakao from "../../resources/images/kakaoSm.png";

const Login = () => {
  const { loggedIn, kakaoLogIn } = useUser();
  const { location, replace } = usePage();

  useEffect(() => {
    if (loggedIn) {
      if (location.state && location.state.hasOwnProperty("from")) {
        const { from, search = "" } = location.state;
        replace(from, search);
      } else {
        replace("/");
      }
    }
  }, [loggedIn]);

  const onSuccessKakao = async (resData) => {
    const {
      profile: {
        properties: { nickname, profile_image: profileImg },
      },
      response: { access_token: kakaoAccessToken },
    } = resData;

    const reqData = {
      kakaoAccessToken,
      nickname,
      profileImg,
    };

    kakaoLogIn(reqData);
  };

  // const onClickEmail = () => {
  //   NoticeAlert.open("곧 업데이트 예정이에요!");
  //   // goPage("/login/email"); 1차 MVP 제외
  // };

  return (
    <PageContainer>
      <NoticeAlert icon={ENUM.WARNING} btns={[{ name: "닫기" }]} />
      {/* title */}
      <TitleWrap>
        <LogoWrap>
          <SVG type={ENUM.HEADERLOGO} />
          <Title>오늘의 테스트</Title>
        </LogoWrap>
        <div>
          {/* kakao login */}
          <BtnKakaoLogin
            token={key.kakao}
            onSuccess={onSuccessKakao}
            // onFail={console.error} 카카오 에러 처리
            // onLogout={console.info}
            getProfile={true}
          >
            <Icon>
              <img src={kakao} alt="kakao" />
            </Icon>
            {KAKAO}
          </BtnKakaoLogin>
          {/* redirect email login */}
          {/* <BtnField color="skyBlue" onClick={onClickEmail}>
            {EMAIL}
          </BtnField> */}
        </div>
      </TitleWrap>
      {/* summary */}
      <Summary>
        로그인 시 <strong>개인정보보호정책</strong>을 읽었으며
        <br />
        <strong>서비스 이용약관</strong>에 동의하는 것으로 간주합니다.
      </Summary>
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  padding: 0 ${({ theme: { paddings } }) => paddings.main}rem;
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
    width: 100% !important;
    padding: 13.5px !important;
    border-radius: 8px !important;
  }
`;

const TitleWrap = styled.div`
  margin: auto;
  width: 100%;
`;

const LogoWrap = styled.div`
  margin-bottom: 42px;
  font-family: "yg-jalnan";
  text-align: center;
`;

export const Logo = styled.div`
  margin-top: 176px;
`;

const Title = styled.h1`
  margin-top: 17px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
  line-height: 35px;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const Icon = styled.span`
  margin-right: 8px;
  display: flex;

  img {
    width: 24px;
    height: 24px;
  }
`;

const BtnKakaoLogin = styled(KaKaoLogin)`
  width: 100% !important;
  padding: 13.5px !important;
  height: unset !important;

  display: flex !important;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem !important;
  font-weight: bold;

  letter-spacing: -0.6px;
  line-height: 27px !important;
`;

export const Summary = styled.p`
  margin: auto auto 40px auto;
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  color: ${({ theme: { colors } }) => colors.gray};

  strong {
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;

export default Login;
