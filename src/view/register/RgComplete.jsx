import React, { useCallback } from "react";
import { Title } from "../login/Email";
import { PageContainer } from "../login/Login";
import { HOME } from "../../constants/Enum";
import usePage from "../../hooks/usePage";
import { BtnField } from "../../components/common";
import styled from "styled-components";

const RgComplete = (props) => {
  const { replace } = usePage();
  const onClickLogin = useCallback(
    (e) => {
      return replace("/login/email");
    },
    [replace]
  );
  const onClickHome = useCallback(
    (e) => {
      return replace("/");
    },
    [replace]
  );
  return (
    <PageContainer>
      <Title>회원가입을 축하해요!</Title>
      <BtnField name="테스트 바로 만들기" color="blue" onClick={onClickLogin} />
      <Margin />
      <BtnField name={HOME} color="skyBlue" onClick={onClickHome} />
    </PageContainer>
  );
};

export default RgComplete;

const Margin = styled.div`
  padding-bottom: 1.2rem;
`;
