import React, { useMemo } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import qs from "query-string";

import { BtnField } from "../components/common";
import { Section } from "../styles";
import usePage from "../hooks/usePage";

import { md } from "../constants/Enum";
import msg from "../constants/msg";
import errorImg from "../resources/images/error.png";

const { errorPage } = msg;

/*
 * search: query string; ex) ?errorCode=500
 * code: number;
 */
const Error = ({ location: { search }, code = 404 }) => {
  const { goBack, goPage } = usePage();
  const errorCode = useMemo(() => {
    if (search.length < 1) return code;

    const queryCode = qs.parse(search).errorCode;
    if (!errorPage.hasOwnProperty(queryCode)) return code;

    return queryCode;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <ErrorSection>
      <ErrorImg src={errorImg} alt="error" />
      <Title>앗, 여긴 어디? 나는 누구죠?</Title>
      <Message>{errorPage[errorCode]}</Message>
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
  padding-bottom: ${({ theme: { heights } }) => heights.header}px;
  width: 100%;
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

export default withRouter(Error);
