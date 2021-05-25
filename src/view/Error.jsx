import React from "react";
import styled from "styled-components";

import { BtnField } from "../components/common";
import { Section } from "../styles";
import usePage from "../hooks/usePage";

import { md } from "../constants/Enum";
import msg from "../constants/msg";
import errorImg from "../resources/images/error.png";

// code: number;
const Error = ({ code = 404 }) => {
  const { goBack, goPage } = usePage();

  // 추후 code에 따라 다른 내용 렌더링 필요
  return (
    <ErrorSection>
      <ErrorImg src={errorImg} alt="error" />
      <Title>앗, 여긴 어디? 나는 누구죠?</Title>
      <Message>{msg.errorPage[code]}</Message>
      <Buttons>
        <li>
          <BtnField size={md} color="skyBlue" onClick={() => goPage("/")}>
            홈으로
          </BtnField>
        </li>
        <li>
          <BtnField size={md} color="blue" onClick={goBack}>
            이전으로
          </BtnField>
        </li>
      </Buttons>
    </ErrorSection>
  );
};

const ErrorSection = styled(Section)`
  margin: auto;
  text-align: center;
`;

const ErrorImg = styled.img`
  margin-bottom: 32px;
  width: 160px;
  height: 160px;
`;

const Title = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
  line-height: 36px;
  letter-spacing: -1px;
  color: ${({ theme: { colors } }) => colors.darkGray};
  font-weight: bold;
`;

const Message = styled.p`
  margin: 8px 0 32px 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

const Buttons = styled.ul`
  display: flex;
  width: 100%;

  li {
    flex: 1;
  }
  li:first-child {
    margin-right: 12px;
  }
`;

export default Error;
