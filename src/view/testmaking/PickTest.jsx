import React from "react";
import styled from "styled-components";

import { TitleBox, ListCard } from "../../components/common/index.js";
import usePage from "../../hooks/usePage.js";
import useMaking from "../../hooks/useMaking.js";

import { mbti, multiple, weight } from "../../constants/Enum.js";
import testInfo from "../../constants/testInfo.js";

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

// type: string; ex) "multiple" | "mbti" | "weight"
const TestCard = ({ type }) => {
  const { name, desc } = testInfo[type];
  const { initStateByType } = useMaking();
  const { goPage } = usePage();

  const onSetType = () => {
    initStateByType(type);
    goPage(`/test/${type}/preset`);
  };

  return (
    <div onClick={onSetType}>
      <ListCard title={`${name} 테스트`}>
        <TestDesc>{desc}</TestDesc>
      </ListCard>
    </div>
  );
};

const TestDesc = styled.p`
  font-size: 14px;
  letter-spacing: -0.3px;
  line-height: 21px;
  color: #697382;
`;

export default PickTest;
