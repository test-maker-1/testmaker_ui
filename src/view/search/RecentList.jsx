import React from "react";
import styled from "styled-components";

function RecentList() {
  return (
    <ul>
      <RecentItem>방탄 소년단 아미 테스트</RecentItem>
    </ul>
  );
}

const RecentItem = styled.li`
  display: flex;
`;

export default RecentList;
