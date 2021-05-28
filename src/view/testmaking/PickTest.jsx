import React from "react";
import styled from "styled-components";

import { TitleBox } from "../../components/common/index.js";
import Error from "../Error.jsx";

import MakingAPI from "../../api/makingAPI.js";
import usePage from "../../hooks/usePage.js";
import useOpen from "../../hooks/useOpen.js";
import useMaking from "../../hooks/useMaking.js";
import useUser from "../../hooks/useUser.js";
import { LOADING, SUCCESS } from "../../utils/asyncUtils.js";

import { mbti, multiple, weight } from "../../constants/Enum.js";
import testInfo from "../../constants/testInfo.js";
import tempImg from "../../resources/temp-img.png";

const breakWidth = 350;
const [pt, pl] = [20, 23];

const PickTest = () => {
  const { status, loggedIn } = useUser();
  const { open: error, onOpen: onError } = useOpen();
  const { testId, getTestId, setTestType } = usePick();

  if (testId) return <Error code={406} />; // invalied step
  if (error) return <Error code={500} />; // server error

  const onInitTest = async (type) => {
    const successGetId = await getTestId(type);
    if (successGetId) {
      setTestType(type);
      return;
    }
    onError();
  };

  if (status === LOADING) return null; // 로딩 중 -> 추후 스피너로 대체
  if (!loggedIn) return <Error code={403} />; // logOut

  return (
    <div>
      <TitleBox title="어떤 테스트를 만드시나요?" noline>
        <TestCard type={multiple} onClick={onInitTest} />
        <TestCard type={mbti} onClick={onInitTest} />
        <TestCard type={weight} onClick={onInitTest} />
      </TitleBox>
    </div>
  );
};

/*
 * title: string;
 * thumbnail: img file;
 */
const TestCard = ({ type, thumbnail = tempImg, onClick }) => {
  const { name, desc } = testInfo[type];
  return (
    <BtnWrap onClick={() => onClick(type)}>
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

const usePick = () => {
  const {
    dispatch,
    data,
    initCommonData,
    initStateByType,
    updateCommon,
  } = useMaking();
  const { goPage } = usePage();
  const { maker } = data;

  const getTestId = async (type) => {
    if (data.testId) return;

    const params = {
      type,
      userUid: maker.userUid,
      userName: maker.name,
    };

    const { data: resData, status } = await MakingAPI.getTestId(params);
    if (status === SUCCESS) {
      updateCommon("testId", resData.testUid);
      return true;
    }

    dispatch(initCommonData(true));
    return false;
  };

  const setTestType = (type) => {
    initStateByType(type);
    goPage(`/test/${type}/preset`);
  };

  return { testId: data.testId, getTestId, setTestType };
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
