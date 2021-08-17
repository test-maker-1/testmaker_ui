import React from "react";
import styled from "styled-components";
import { EMAIL, NAVER, GOOGLE } from "../../constants/Enum";

import { PageContainer, Logo, Summary } from "./Login";
import usePage from "../../hooks/usePage";
import { BtnField } from "../../components/common";

const Other = () => {
  const { goPage } = usePage();

  return (
    <PageContainer>
      <Logo />
      {/* <Name>TEST MAKER</Name> */}
      <BtnField onClick={() => goPage("/login/email")}>{EMAIL}</BtnField>
      <Or>or</Or>
      <BtnField name={NAVER} onClick={() => goPage("/login/naver")} />
      <BtnField name={GOOGLE} onClick={() => goPage("/login/google")} />

      <Summary>
        테스트메이커 계정이 없으신가요? <b>회원가입</b>
      </Summary>
    </PageContainer>
  );
};

export default Other;

const Or = styled.div`
  margin: 2px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.5px;
  color: #697382;
`;
