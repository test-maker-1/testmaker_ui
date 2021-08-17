import React, { useEffect } from "react";
import styled from "styled-components";

import { Loading, NoticeAlert, TitleBox } from "../../components/common";
import Error from "../Error.jsx";

import MakingAPI from "../../api/makingAPI.js";
import usePage from "../../hooks/usePage.js";
import useUser from "../../hooks/useUser.js";
import useCommon from "../../hooks/making/useCommon.js";
import useMiniReducer from "../../hooks/useMiniReducer.js";

import { ERROR, LOADING, SUCCESS } from "../../utils/asyncUtils.js";
import ENUM, { mbti, multiple, weight } from "../../constants/Enum.js";
import testInfo from "../../constants/testInfo.js";

const breakWidth = 350;

const PickTest = () => {
  const { status, loggedIn, data } = useUser();
  const savedTestCnt = loggedIn ? data.savedTestCnt : 0;

  const { state, request, requestError } = useMiniReducer();
  const { goPage } = usePage();
  const { testId, getTestId, initStateByType } = usePick();

  useEffect(() => {
    if (!loggedIn) return;

    if (savedTestCnt > 0)
      NoticeAlert.open({
        icon: ENUM.WARNING,
        text: "만들다만 테스트가 있어요!",
        btns: [
          { name: "새로운 테스트" },
          { name: "이어하기", callback: () => goPage("/mypage/main") },
        ],
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, savedTestCnt]);

  if (status === LOADING) return null;
  if (!loggedIn) return <Error code={403} />; // logOut

  if (testId) return <Error code={406} />; // invalied step
  if (state.status === ERROR) return <Error code={500} />; // server error

  const onInitTest = async (type) => {
    request();

    const successGetId = await getTestId(type);
    if (successGetId) {
      initStateByType(type);
      goPage(`/test/${type}/preset`);
      return;
    }
    requestError();
  };

  return (
    <div>
      <Loading loading={state.status === LOADING} />
      <TitleBox title="어떤 테스트를 만드시나요?" noline>
        <TestCard type={multiple} onClick={onInitTest} />
        <TestCard type={mbti} onClick={onInitTest} />
        <TestCard type={weight} onClick={onInitTest} />
      </TitleBox>
    </div>
  );
};

// title: string;
const TestCard = ({ type, onClick }) => {
  const { name, desc, thumbnail } = testInfo[type];
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
  const { data, initCommon, initStateByType, updateCommon } = useCommon();
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

    initCommon(true);
    return false;
  };

  return { testId: data.testId, getTestId, initStateByType };
};

const Thumbnail = styled.div`
  padding-right: 14px;
  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
`;

const BtnWrap = styled.button`
  width: 100%;
  margin-bottom: 16px;
  padding: 23px 16px;

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
      padding-bottom: 16px;
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
