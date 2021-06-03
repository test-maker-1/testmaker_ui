import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import { NEXT } from "../../constants/Enum";
import { PageContainer } from "../login/Login";
import { Title, Input, MarginBox } from "../login/Email";
import { EmailInput } from "../login/findPw/PwEmailAuth";
import usePage from "../../hooks/usePage";
import { useStyles } from "../../view/login/findPw/PwEmailAuth";
import { BtnField } from "../../components/common";
import styled, { css } from "styled-components";

const RgEmailAuth = (props) => {
  const classes = useStyles();
  const { replace } = usePage();
  // const [email, setEmail] = useState("");
  // const [authNumber, setAuthNumber] = useState("");
  // const [error, setError] = useState("");

  const getAuthNumber = useCallback((e) => {
    e.preventDefault();
    // console.log("인증번호 받기");
  }, []);

  const onComplete = useCallback(
    (e) => {
      e.preventDefault();
      return replace("/register/pw-setting");
    },
    [replace]
  );

  return (
    <PageContainer>
      <Title>환영합니다!</Title>
      <EmailForm onSubmit={getAuthNumber}>
        <EmailInput
          type="email"
          placeholder="이메일을 적어주세요"
          // onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <Button type="submit" className={classes.useBtn}>
          인증번호 받기
        </Button>
      </EmailForm>

      <AuthForm onSubmit={onComplete}>
        <Input
          type="text"
          placeholder="인증번호를 적어주세요"
          // onChange={(e) => setAuthNumber(e.target.value)}
          required
          className="auth-input"
        />

        <MarginBox>
          <BtnField type="submit" name={NEXT} color="blue" onClick={null} />
        </MarginBox>
      </AuthForm>
    </PageContainer>
  );
};

export default RgEmailAuth;

const EmailForm = styled.form`
  display: flex;

  .email-input {
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

const AuthForm = styled.form`
  .auth-input {
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
