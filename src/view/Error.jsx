import React from "react";
import styled from "styled-components";

import { BtnField } from "../components/common";
import { Section } from "../styles";
import usePage from "../hooks/usePage";

import errorImg from "../resources/images/error.png";
import { md } from "../constants/Enum";

// code: number;
const Error = ({ code = 404 }) => {
  const { goBack, goPage } = usePage();

  // 추후 code에 따라 다른 내용 렌더링 필요
  return (
    <ErrorSection>
      <ErrorImg src={errorImg} alt="error" />
      <Title>앗, 여긴 어디? 나는 누구죠?</Title>
      <Message>
        주소를 잘못 입력하셨거나, 주소가 변경 또는 삭제 됐을 수 있어요. 주소를
        다시 확인해주세요!
      </Message>
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
