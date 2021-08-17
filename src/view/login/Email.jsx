import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { LOGIN } from "../../constants/Enum";
import { PageContainer, Summary } from "./Login";
import usePage from "../../hooks/usePage";
import { BtnField, InfoText } from "../../components/common";
import { NAVER, GOOGLE } from "../../constants/Enum";
import naver from "../../resources/images/naver.png";
import google from "../../resources/images/google.png";

const Email = () => {
  const { replace } = usePage();
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 이메일 검증
      const regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (email.match(regExp) == null) {
        setErrors({
          ...errors,
          email: "올바르지 않는 이메일이에요! 다시 확인해주세요",
          // nonExistentEmail: "존재하지 않는 이메일이에요! 다시 확인해주세요",
          // nonSignup:"가입하지 않은 아이디이거나, 비밀번호가 틀렸어요"
        });
        return;
      }

      //console.log("맞음");
      return replace("/");
    },
    [email, errors, replace]
  );

  return (
    <PageContainer>
      <Title>로그인</Title>
      <Form onSubmit={onSubmit} errors={errors}>
        <Input
          type="search"
          placeholder="이메일을 적어주세요"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        {errors.email && <InfoText text={errors.email} color="alert" />}
        <Input
          type="search"
          placeholder="비밀번호는 6자 이상이에요"
          // onChange={(e) => setPassword(e.target.value)}
          required
          className="password-input"
        />
        {errors.password && <InfoText text={errors.password} color="alert" />}
        <MarginBox>
          <BtnField type="submit" color="blue">
            {LOGIN}
          </BtnField>
        </MarginBox>
        <div style={{ margin: "8px 0px", textAlign: "center" }}>
          <PText>or</PText>
        </div>
        {/* kakao login */}
        <BtnNaverLogin
        // token={key.kakao}
        // onSuccess={onSuccessKakao}
        // onFail={console.error} 카카오 에러 처리
        // onLogout={console.info}
        // getProfile={true}
        >
          <Icon2>
            <img src={naver} alt="naver" />
          </Icon2>
          {NAVER}
        </BtnNaverLogin>
        <BtnGoggleLogin>
          <Icon>
            <img src={google} alt="google" />
          </Icon>
          {GOOGLE}
        </BtnGoggleLogin>
      </Form>

      <SummaryLink>
        <span style={{ marginRight: "8px" }}>
          테스트메이커 계정이 없으신가요?
        </span>
        <Link to="/register/email-auth">회원가입</Link> <br />
        <span style={{ marginRight: "8px" }}>비밀번호를 잊으셨나요?</span>
        <Link to="/login/find-pw/email-auth">찾기</Link>
      </SummaryLink>
    </PageContainer>
  );
};

export default Email;

export const Title = styled.div`
  margin: auto 0 24px 0;
  text-align: start;
  font-size: 3rem; /* 30px */
  font-weight: 700;
  color: #515966;
  line-height: 4.4rem; /* 44px */
  letter-spacing: -1px;
`;

const Form = styled.form`
  input::-ms-clear,
  input::-ms-reveal {
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    position: relative;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 17.5L17.5 6.5' stroke='%23CFD3DB' stroke-width='2.5'/%3E%3Cpath d='M17.5 17.5L6.5 6.5' stroke='%23CFD3DB' stroke-width='2.5'/%3E%3C/svg%3E");
  }

  .password-input {
    &:focus {
      outline: none;
      ${({ errors }) => {
        if (errors.password)
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
  .email-input {
    &:focus {
      outline: none;
      ${({ errors }) => {
        if (errors.email || errors.password)
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

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  background: ${({ theme: { colors } }) => colors.white};
  height: 54px;
  margin: 6px 0;
  font-size: 1.5rem; /* 15px */
  color: ${({ theme: { colors } }) => colors.darkGray};
  line-height: 22px;
  padding: 1.35rem;
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.gray};
  }
`;

export const Error = styled.div`
  text-align: start;
  margin: 2px 0 6px 0;
  letter-spacing: -0.3px;
  color: #ff5146;
  font-size: 1.4rem;
  line-height: 21px;
`;

const SummaryLink = styled(Summary)`
  a {
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.blue};
    text-decoration-line: none;
  }
`;

export const MarginBox = styled.div`
  margin-top: 18px;
`;

const PText = styled.h1`
  height: 24px;
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.titleGray};
`;

export const Icon = styled.span`
  margin-right: 8px;
  display: flex;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Icon2 = styled.span`
  margin-right: 8px;
  display: flex;

  img {
    width: 16px;
    height: 15px;
  }
`;

const BtnNaverLogin = styled.button`
  background: #22ce62;
  border-radius: 8px;
  width: 100% !important;
  padding: 13.5px !important;
  height: unset !important;

  display: flex !important;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem !important;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.snow};

  letter-spacing: -0.6px;
  line-height: 27px !important;
  letter-spacing: -0.6px;
`;

const BtnGoggleLogin = styled.button`
  background: #f1f2f4;
  border-radius: 8px;
  width: 100% !important;
  padding: 13.5px !important;
  height: unset !important;

  display: flex !important;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem !important;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.bodyGray};

  letter-spacing: -0.6px;
  line-height: 27px !important;
  letter-spacing: -0.6px;
`;
