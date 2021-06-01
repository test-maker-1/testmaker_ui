import React, { useEffect } from "react";
import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Confetti from "react-confetti";

import {
  TitleBox,
  Title,
  BtnShare,
  NoticeAlert,
} from "../../components/common";
import BottomBtn from "../../components/frame/BottomBtn";
import { FeedBtn } from "../../components/making";
import Error from "../Error";

import MakingAPI from "../../api/makingAPI";
import useUser from "../../hooks/useUser";
import usePage from "../../hooks/usePage";
import useOpen from "../../hooks/useOpen";
import { ERROR, LOADING } from "../../utils/asyncUtils";

import ENUM from "../../constants/Enum";
import msg from "../../constants/msg";
import jellies from "../../resources/images/jellies.png";

const TestRelease = () => {
  const { status, loggedIn } = useUser();
  const { goPage } = usePage();

  const savedTest = JSON.parse(sessionStorage.getItem("savedTest"));
  const { open: feed, onOpen, onClose } = useOpen();

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

  const onSetFeed = async (e) => {
    const openTest = JSON.parse(e.currentTarget.value);
    if (openTest === feed) return;

    if (openTest) onOpen();
    else onClose();

    const params = {
      testId: savedTest.testId,
      onFeed: openTest,
    };
    const { status } = await MakingAPI.updateOnFeed(params);

    if (status === ERROR) NoticeAlert.open(msg.errorPage[500]);
  };

  return (
    <div>
      {/* modal */}
      <NoticeAlert
        icon={ENUM.WARNING}
        btns={[{ name: "홈으로", callback: () => goPage("/") }]}
      />

      <TitleBox noline>
        <ImgWrap>
          <Confetti width={234} height={156} numberOfPieces={70} />
          <img src={jellies} alt="success thumanil" />
          <SuccessTitle>테스트 만들기 성공!</SuccessTitle>
          <Guide>테스트 관리는 마이페이지에서 할 수 있어요!</Guide>
        </ImgWrap>
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
  margin: 37px auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  canvas {
    position: relative !important;
    top: 40px !important;
  }
`;

const SuccessTitle = styled(Title)`
  margin-top: 11.8px;
  padding-bottom: 8px;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

const Guide = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.deepGray};
`;

export default TestRelease;
