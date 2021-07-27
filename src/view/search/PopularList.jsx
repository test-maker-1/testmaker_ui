import React from "react";
import styled from "styled-components";
import { RankingRow } from "../../components/common";

function PopularList({ popularList = [] }) {
  return (
    <Container>
      {popularList.map((item, idx) => (
        <RankingRow key={idx} ranking={{ name: item.item }} rank={++idx} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  .name {
    color: ${({ theme: { colors } }) => colors.darker};
    font-weight: normal;
  }

  li:last-child {
    margin-bottom: 6px;
  }
`;

export default PopularList;
