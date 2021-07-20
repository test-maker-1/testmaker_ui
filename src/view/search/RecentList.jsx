import React from "react";
import styled from "styled-components";

import { ReactComponent as Clock } from "../../resources/svg/clock.svg";
import { ReactComponent as Cancel } from "../../resources/svg/cancel.svg";

function RecentList() {
  return (
    <Container>
      <RecentItem>
        <TextWrap>
          <Clock className="icon" />
          <span className="text">방탄 소년단 아미 테스트</span>
        </TextWrap>
        <Cancel />
      </RecentItem>
    </Container>
  );
}

const Container = styled.ul`
  li:first-child {
    margin-top: 0 !important;
  }
`;

const RecentItem = styled.li`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 8px;
  }

  .text {
    width: 100%;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
    line-height: 24px;
    color: ${({ theme: { colors } }) => colors.darker};
  }
`;

export default RecentList;
