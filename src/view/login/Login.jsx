import React, { useCallback } from "react";
import styled from "styled-components";
import { KAKAO, EMAIL } from "../../constants/Enum";
import usePage from "../../hooks/usePage";
import { BtnField, SVG } from "../../components/common";
import kakaoSm from "../../resources/images/kakaoSm.png";

const Login = (props) => {
  const { goPage } = usePage();

  const onClickKakao = useCallback(
    (e) => {
      goPage("/login/other");
    },
    [goPage]
  );

  const onClickEmail = useCallback(
    (e) => {
      goPage("/login/email");
    },
    [goPage]
  );

  return (
    <PageContainer>
      {/* <Logo>
        <SVG type={ENUM.MAINLOGO} style={{ width: "200", height: "54" }} />
      </Logo>
      <Title>세컨드 모먼트</Title>
      <SubTitle>30초 만에 테스트를 만들어보세요</SubTitle> */}
      <BtnBox>
        <BtnField name={KAKAO} color="kakao" onClick={onClickKakao} />
      </BtnBox>

      <BtnBox>
        <BtnField name={EMAIL} color="skyBlue" onClick={onClickEmail} />
      </BtnBox>
      <Summary>
        로그인 시 <b>개인정보보호정책</b>을 읽었으며 <br />
        <b>서비스 이용약관</b>에 동의하는 것으로 간주합니다.
      </Summary>
    </PageContainer>
  );
};

export default Login;

export const PageContainer = styled.div`
  padding: 0 ${({ theme: { paddings } }) => paddings.main}rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  margin-top: 176px;
`;

export const Title = styled.div`
  margin: 0 auto;
  margin-bottom: 42px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;
  color: #515966;
`;

export const BtnBox = styled.div`
  padding: 0.5rem 0 0.5rem 0;
`;

export const Summary = styled.div`
  position: absolute;
  margin: 0 auto;
  bottom: 4rem;
  left: 0;
  right: 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  color: ${({ theme: { colors } }) => colors.gray};
  b {
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
