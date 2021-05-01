import React from "react";
import styled from "styled-components";

import { TitleBox, ListCard } from "../components/common/index.js";
import { mbti, multiple, weight } from "../constants/urlInfo.js";
import testInfo from "../constants/testInfo.js";

const PickTest = () => {
  return (
    <div>
      <TitleBox title="어떤 테스트를 만드시나요?" noline>
        <TestCard type={multiple} />
        <TestCard type={mbti} />
        <TestCard type={weight} />
      </TitleBox>
    </div>
  );
};

const TestCard = ({ type }) => {
  const { name, desc } = testInfo[type];
  return (
    <ListCard title={`${name} 테스트`}>
      <TestDesc>{desc}</TestDesc>
    </ListCard>
  );
};

const TestDesc = styled.p`
  font-size: 14px;
  letter-spacing: -0.3px;
  line-height: 21px;
  color: #697382;
`;

export default PickTest;
