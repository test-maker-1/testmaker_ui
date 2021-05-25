import React from "react";
import styled from "styled-components";

import { TitleBox } from "../../components/common/index.js";
import Error from "../Error.jsx";

import usePage from "../../hooks/usePage.js";
import useMaking from "../../hooks/useMaking.js";
import useUser from "../../hooks/useUser.js";

import { mbti, multiple, weight } from "../../constants/Enum.js";
import testInfo from "../../constants/testInfo.js";
import tempImg from "../../resources/temp-img.png";

const breakWidth = 350;
const [pt, pl] = [20, 23];

const PickTest = () => {
  const { loggedIn } = useUser();

  if (!loggedIn) return <Error code={403} />;

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

/*
 * title: string;
 * thumbnail: img file;
 */
const TestCard = ({ type, thumbnail = tempImg }) => {
  const { initStateByType } = useMaking();
  const { goPage } = usePage();
  const { name, desc } = testInfo[type];

  const onSetType = () => {
    initStateByType(type);
    goPage(`/test/${type}/preset`);
  };

  return (
    <BtnWrap onClick={onSetType}>
      <Thumbnail>
        <img src={thumbnail} alt={name} />
      </Thumbnail>
      <TextWrap>
        <Title>{`${name} 테스트`}</Title>
        <TestDesc>{desc}</TestDesc>
      </TextWrap>
    </BtnWrap>
  );
};

const Thumbnail = styled.div`
  padding-right: ${pl}px;
  display: flex;
  align-items: center;
`;

const BtnWrap = styled.button`
  width: 100%;
  margin-bottom: 16px;
  padding: ${pt}px ${pl}px;

  display: flex;
  align-items: center;

  border: 2px solid ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  background: ${({ theme: { colors } }) => colors.white};

  &:active {
    border: 2px solid ${({ theme: { colors } }) => colors.blue};
  }

  @media (max-width: ${breakWidth}px) {
    flex-direction: column;
    ${Thumbnail} {
      width: 100%;
      padding-bottom: ${pt}px;
    }
  }
`;

const TextWrap = styled.div`
  width: 100%;
  text-align: left;
`;

const Title = styled.h2`
  margin-bottom: 4px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  font-weight: bold;
  line-height: 27px;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

const TestDesc = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

export default PickTest;
