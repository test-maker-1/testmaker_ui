import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";
import { NEXT } from "../../constants/Enum";
import { PageContainer } from "../login/Login";
import { Title, Input, MarginBox } from "../login/Email";
import { EmailInput } from "../login/findPw/PwEmailAuth";
import usePage from "../../hooks/usePage";
import { useStyles } from "../../view/login/findPw/PwEmailAuth";
import { BtnField } from "../../components/common";
import { Icon } from "../login/Email";
import error from "../../resources/images/error_outline.png";

const RgEmailAuth = (props) => {
  const classes = useStyles();
  const { replace } = usePage();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState(false);
  // const [authNumber, setAuthNumber] = useState("");
  const [err, setErr] = useState(null);

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
      <Title style={{ margin: "82px 0 24px 0" }}>환영합니다!</Title>
      <EmailForm onSubmit={getAuthNumber}>
        <EmailInput
          className="email-input"
          type="email"
          required
          placeholder="이메일을 적어주세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className={classes.useBtn}>
          인증번호 받기
        </Button>
      </EmailForm>
      {err === "dup" && (
        <ErrorTxt>
          <Icon>
            <img src={error} alt="error"></img>
          </Icon>
          중복된 이메일이에요! 다시 확인해주세요
        </ErrorTxt>
      )}
      <AuthForm onSubmit={onComplete}>
        <Input
          type="text"
          className="auth-input"
          required
          placeholder="인증번호를 적어주세요"
          // onChange={(e) => setAuthNumber(e.target.value)}
        />
        {err === "valid" && <ErrorTxt>다시 확인해주세요</ErrorTxt>}
        <MarginBox>
          {/* size={md}  "blue"*/}
          <BtnField
            type="submit"
            color={pass ? "blue" : "skyBlue"}
            disabled={!pass}
            onClick={null}
          >
            {NEXT}
          </BtnField>
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

const ErrorTxt = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors } }) => colors.error};
  margin: 0px 4px;
`;
