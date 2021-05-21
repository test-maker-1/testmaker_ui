import React from "react";
import styled from "styled-components";

import { BtnField } from "../../components/common";
import usePage from "../../hooks/usePage";

import { KAKAO, EMAIL } from "../../constants/Enum";
import kakao from "../../resources/images/kakaoSm.png";

const Login = () => {
  const { goPage } = usePage();

  const onClickKakao = (e) => {
    // 카카오 로그인 로직
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
          <BtnField name="kakao-login" color="kakao" onClick={onClickKakao}>
            <Icon>
              <img src={kakao} alt="kakao" />
            </Icon>
            {KAKAO}
          </BtnField>
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
