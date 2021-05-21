import React from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";

import { BtnField } from "../../components/common";
import useUser from "../../hooks/useUser";
import usePage from "../../hooks/usePage";
import { SUCCESS } from "../../utils/asyncUtils";

import { key } from "../../constants/config";
import { KAKAO, EMAIL } from "../../constants/Enum";
import kakao from "../../resources/images/kakaoSm.png";

const Login = () => {
  const { status, kakaoLogIn } = useUser();
  const { goPage } = usePage();

  if (status === SUCCESS) goPage("/");

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

  const onClickEmail = () => goPage("/login/email");

  return (
    <PageContainer>
      {/* title */}
      <TitleWrap>
        <LogoWrap>
          {/* <Logo>
            <SVG type={ENUM.MAINLOGO} style={{ width: "200", height: "54" }} />
          </Logo>
          */}
          <Title>세컨드 모먼트</Title>
          {/* <SubTitle>30초 만에 테스트를 만들어보세요</SubTitle> */}
        </LogoWrap>
        <div>
          {/* kakao login */}
          <BtnKakaoLogin
            token={key.kakao}
            onSuccess={onSuccessKakao}
            // onFail={console.error}
            // onLogout={console.info}
            getProfile={true}
          >
            <Icon>
              <img src={kakao} alt="kakao" />
            </Icon>
            {KAKAO}
          </BtnKakaoLogin>
          {/* redirect email login */}
          <BtnField color="skyBlue" onClick={onClickEmail}>
            {EMAIL}
          </BtnField>
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
  font-size: 24px;
  line-height: 35px;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const Icon = styled.span`
  margin-right: 8px;
  display: flex;
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
