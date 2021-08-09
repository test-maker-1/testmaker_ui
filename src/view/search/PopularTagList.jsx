import React from "react";
import styled from "styled-components";
import { Tag } from "../../components/common";

function PopularTagList({ popularTagList = [] }) {
  return (
    <Container>
      {popularTagList.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  .tag {
    margin-bottom: 10px;
    background: none;
  }
`;

export default PopularTagList;
