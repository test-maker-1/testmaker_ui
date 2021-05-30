import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { TitleBox, Title, BtnShare } from "../../components/common";
import BottomBtn from "../../components/frame/BottomBtn";
import { FeedBtn } from "../../components/making";
import Error from "../Error";

import MakingAPI from "../../api/makingAPI";
import useUser from "../../hooks/useUser";
import usePage from "../../hooks/usePage";
import { ERROR, LOADING } from "../../utils/asyncUtils";

import ENUM from "../../constants/Enum";
import tempImg from "../../resources/temp-img.png";
import useOpen from "../../hooks/useOpen";

const TestRelease = () => {
  const { status, loggedIn } = useUser();
  const { goPage } = usePage();

  const savedTest = JSON.parse(sessionStorage.getItem("savedTest"));
  const { open: feed, onOpen } = useOpen();

  const submitTest = async () => {
    const { status } = await MakingAPI.submitTest(savedTest.testId);
    if (status === ERROR) {
      sessionStorage.removeItem("savedTest");
      goPage("/error", "?errorCode=500");
    }
  };

  useEffect(() => {
    if (savedTest) submitTest();
    return () => sessionStorage.removeItem("savedTest");
  }, []);

  if (status === LOADING) return null;
  if (!loggedIn) return <Error code={403} />; // logOut

  if (!savedTest) return <Error code={406} />; // invalied step

  const onSetFeed = (e) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <TitleBox noline>
        {/* success */}
        <ImgWrap>
          <img src={tempImg} alt="success thumbnail" />
        </ImgWrap>
        <SuccessTitle>테스트 만들기 성공!</SuccessTitle>
        <Guide>테스트 관리는 마이페이지에서 할 수 있어요!</Guide>
      </TitleBox>
      <TitleBox title="홈 피드에 공개할까요?">
        {/* setting onFeed */}
        <ButtonGroup fullWidth={true}>
          <FeedBtn onFeed={feed} value={false} onClick={onSetFeed}>
            안 할래요
          </FeedBtn>
          <FeedBtn onFeed={feed} value={true} onClick={onSetFeed}>
            공개할래요
          </FeedBtn>
        </ButtonGroup>
      </TitleBox>
      <TitleBox title="친구에게 공유할래요!" noline>
        <BtnShare />
      </TitleBox>
      <BottomBtn btnArr={[{ name: "홈으로", type: ENUM.HOME }]} />
    </div>
  );
};

const ImgWrap = styled.div`
  margin: 73px auto;
  text-align: center;

  img {
    width: 160px;
    height: 155px;
  }
`;

const SuccessTitle = styled(Title)`
  padding-bottom: 8px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

const Guide = styled.p`
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.deepGray};
`;

export default TestRelease;
