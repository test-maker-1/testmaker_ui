import React, { useEffect } from "react";
import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Confetti from "react-dom-confetti";

import {
  TitleBox,
  Title,
  BtnShare,
  NoticeAlert,
  LottieImg,
} from "../../components/common";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { FeedBtn } from "../../components/making";
import Error from "../Error";

import MakingAPI from "../../api/makingAPI";
import useUser from "../../hooks/useUser";
import usePage from "../../hooks/usePage";
import useOpen from "../../hooks/useOpen";
import useMiniReducer from "../../hooks/useMiniReducer";
import { ERROR, INIT, LOADING, SUCCESS } from "../../utils/asyncUtils";

import ENUM from "../../constants/Enum";
import msg from "../../constants/msg";
import jellies from "../../resources/lotties/jellies-lottie.json";

const confettieConfig = {
  angle: 90,
  spread: 200,
  startVelocity: 13,
  dragFriction: 0.12,
  width: "10px",
  height: "12px",
};

const TestRelease = () => {
  const { status, loggedIn } = useUser();
  const { goPage } = usePage();

  const { open: feed, onOpen, onClose } = useOpen(true);
  const { open: fire, onOpen: onFire } = useOpen();
  const { state, request, requestSuccess } = useMiniReducer();

  const testId = sessionStorage.getItem("testId");

  const submitTest = async () => {
    request();

    const { status, data } = await MakingAPI.submitTest(testId);
    sessionStorage.removeItem("testId");

    if (status === SUCCESS) {
      requestSuccess(data);
      return;
    }
    if (status === ERROR) goPage("/error", "?errorCode=500");
  };

  useEffect(() => {
    if (testId) {
      onFire();
      submitTest();
      window.scrollTo({
        top: 0,
      });
    }
    return () => sessionStorage.removeItem("testId");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === LOADING) return null;
  if (!loggedIn) return <Error code={403} />; // logOut
  if (!testId && state.status === INIT) return <Error code={406} />; // invalied step

  const onSetFeed = async (e) => {
    const openTest = JSON.parse(e.currentTarget.value);
    if (openTest === feed) return;

    if (openTest) onOpen();
    else onClose();

    const params = {
      testId: state.data.uid, // testId
      onFeed: openTest,
    };
    const { status } = await MakingAPI.updateOnFeed(params);

    if (status === ERROR)
      NoticeAlert.open({
        text: msg.errorPage[500],
        btns: [{ name: "?????????", callback: () => goPage("/") }],
      });
  };

  return (
    <PageContainer>
      <TitleBox noline>
        <ImgWrap>
          <Confetti
            className="release-confetti"
            active={fire}
            config={confettieConfig}
          />
          <LottieImg lottieFile={jellies} />
          <SuccessTitle>????????? ????????? ??????!</SuccessTitle>
          <Guide>????????? ????????? ????????????????????? ??? ??? ?????????!</Guide>
        </ImgWrap>
      </TitleBox>

      {/* setting onFeed */}
      <TitleBox title="??? ????????? ????????????????">
        <ButtonGroup fullWidth={true}>
          <FeedBtn onFeed={feed} value={false} onClick={onSetFeed}>
            ??? ?????????
          </FeedBtn>
          <FeedBtn onFeed={feed} value={true} onClick={onSetFeed}>
            ???????????????
          </FeedBtn>
        </ButtonGroup>
      </TitleBox>

      <TitleBox title="???????????? ???????????????!" noline>
        <BtnShare
          shareInfo={
            state.data && {
              ...state.data,
              link: `/${state.data.testLink}`,
              imageUrl: state.data.coverImg || "",
            }
          }
          customLink={state.data && `/${state.data.testLink}`}
        />
      </TitleBox>
      <BottomBtn btnArr={[{ name: "?????????", type: ENUM.HOME }]} />
    </PageContainer>
  );
};

const ImgWrap = styled.div`
  margin: 37px auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .release-confetti {
    position: relative;
    height: 100px;
    z-index: 1;
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
