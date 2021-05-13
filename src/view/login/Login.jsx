import React, { useCallback } from "react";
import LoginBtn from "../../components/common/LoginBtn";
import styled from "styled-components";
import { KAKAO, OTHER } from "../../constants/Enum";
import usePage from "../../hooks/usePage";

const Login = (props) => {
  const { goPage } = usePage();
  const handleOnClick = useCallback(
    (btnName, e) => {
      if (btnName === KAKAO) goPage("/login/kakao");
      else goPage("/login/other");
    },
    [goPage]
  );
  return (
    <PageContainer>
      <Logo />
      <Name>TEST MAKER</Name>
      <LoginBtn btns={[KAKAO, OTHER]} handleOnClick={handleOnClick} />
      <Summary>
        로그인 시 <b>개인정보보호정책</b>을 읽었으며 <br />
        <b>서비스 이용약관</b>에 동의하는 것으로 간주합니다.
      </Summary>
    </PageContainer>
  );
};

export default Login;

export const PageContainer = styled.div`
  padding: 0 20px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 107px;
  height: 126px;
  margin: 0 auto;
  margin-top: 79px;
  margin-bottom: 20px;
  background: #fafafa;
  border: 1px solid #e5e8ec;
  text-align: center;
`;

export const Name = styled.div`
  margin: 0 auto;
  margin-bottom: 42px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;
  color: #515966;
`;

export const Summary = styled.div`
  position: absolute;
  margin: 0 auto;
  bottom: 40px;
  left: 0;
  right: 0;
  font-size: 14px;
  line-height: 21px;
  color: #b7bdcb;
  b {
    font-weight: bold;
    color: #697382;
  }
`;
