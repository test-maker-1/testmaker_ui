import React, { useState, useCallback } from "react";
import { NEXT, PWERROR } from "../../../constants/Enum";
import { PageContainer } from "../Login";
import { Title, Input, MarginBox } from "../Email";
import usePage from "../../../hooks/usePage";
import styled, { css } from "styled-components";
import { BtnField, InfoText } from "../../../components/common";

const PwSetting = (props) => {
  const { replace } = usePage();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (password !== passwordCheck) {
        setError(true);
        return;
      }
      return replace("/login/find-pw/complete");
    },
    [password, passwordCheck, setError, replace]
  );

  return (
    <PageContainer>
      <Title>비밀번호 재설정</Title>
      <PwForm onSubmit={onSubmit} error={error}>
        <Input
          type="password"
          placeholder="비밀번호는 6자 이상 적어주세요"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="비밀번호를 다시 적어주세요"
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
        {error && <InfoText text={PWERROR} color="alert" />}

        <MarginBox>
          <BtnField type="submit" name={NEXT} onClick={null} />
        </MarginBox>
      </PwForm>
    </PageContainer>
  );
};

export default PwSetting;

export const PwForm = styled.form`
  input {
    &:focus {
      outline: none;
      ${({ error }) => {
        if (error)
          return css`
            box-shadow: 0 0 0 1px #ff5146;
          `;
        else
          return css`
            box-shadow: 0 0 0 1px #697382;
          `;
      }}
    }
  }
`;
