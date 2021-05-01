import React from "react";
import styled from "styled-components";

import { TitleBox, ListCard } from "../components/common/index.js";
import useMaking from "../hooks/useMaking.js";

import { mbti, multiple, weight } from "../constants/urlInfo.js";
import testInfo from "../constants/testInfo.js";
import usePage from "../hooks/usePage.js";

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
  const { updateCommon } = useMaking();
  const { goPage } = usePage();

  const setTestType = async () => {
    updateCommon("type", type);
    goPage(`/test/${type}/preset`);
  };

  return (
    <div onClick={setTestType}>
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
