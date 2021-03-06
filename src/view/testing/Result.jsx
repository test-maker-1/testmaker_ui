import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { TitleBox } from "../../components/common/TitleBox";
import { ImageView, BtnField, RankingList } from "../../components/common";
import RoundContiner from "./SubComponents/RoundContainer";
import Reply, { ComInput } from "./SubComponents/Reply";
// import TestSwiper from "../../components/common/TestSwiper";
import usePage from "../../hooks/usePage";
import useUser from "../../hooks/useUser";
import ENUM from "../../constants/Enum";
import { postFeedback } from "../../redux/reducer/resultReducer";
import { testing, welcome, login } from "../../constants/urlInfo";
import { returnTextDom } from "../../utils/handler";
import { LOADING } from "../../utils/asyncUtils";
import { NoticeAlert } from "../../components/common";

const { HOME, SHARE } = ENUM;

const settingRank = (isRank, pRanks) => {
  let result = [];

  if (isRank) {
    result = pRanks.map(({ nickname, score }) => {
      return { name: nickname, point: score };
    });
  }

  return result;
};

const Result = memo((props) => {
  const { current_testID } = useSelector((state) => state.testing);
  const {
    responseUid,
    isRankMode,
    testUid,
    userTestResult,
    currentResult: { percent, img, description },
    testResults,
    repliesCnt,
    recent3Replies,
  } = useSelector((state) => state.result);
  const topResult = testResults[0];
  const { goPage } = usePage();
  const { loggedIn, status } = useUser();
  const dispatch = useDispatch();

  const rankOrder = settingRank(isRankMode, testResults);

  const handleonClick = (id, e) => {
    goPage(`/${testing}/${welcome}`, `?testid=${testUid}`);
  };

  const moveToLogin = () => goPage(`/${login}`);

  const openAlert = (type) => {
    if (type === "join") {
      NoticeAlert.open({
        text: [
          "오늘의 테스트 멤버가되면",
          <br key={`br${1}`} />,
          "공개 댓글을 달 수 있어요!",
        ],
        btns: [
          { name: "다음에 할래요" },
          { name: "회원가입", callback: moveToLogin },
        ],
      });
    } else {
      NoticeAlert.open(
        {
          icon: null,
          text: "친구한테 공유할래요!",
          shareInfo: {
            link: `/testing/result?resultid=${responseUid}`,
            title: isRankMode
              ? `내 점수는 ${userTestResult.score}점`
              : userTestResult,
            description: isRankMode
              ? `전체 참여자 중 ${userTestResult.rank}등이에요!`
              : description || "",
            imageUrl: img || "",
          },
          btns: [{ name: SHARE }],
        },
        SHARE
      );
    }
  };

  // const handleShareClick = (id, event) => {
  //   // 선택한 버튼명 반환
  //   dispatch(shareResult(testUid));
  // };

  const checkLogin = () => {
    //로그인 여부
    if (!loggedIn) {
      if (status !== LOADING) openAlert("join");
      return false;
    } else {
      return true;
    }
  };

  const handleOnSubmit = (value) => {
    if (checkLogin() && value) {
      //피드백 작성
      dispatch(postFeedback({ uID: responseUid, value }));
    }
  };

  const handleOnFocus = (event) => {
    if (!checkLogin()) {
      openAlert("join");
    }
  };

  return (
    <PageContainer>
      <div style={{ padding: "2.4rem 2rem 3rem" }}>
        <div style={{ paddingBottom: "2.4rem" }}>
          {isRankMode ? (
            <>
              <Title>내 점수는 {userTestResult.score}점</Title>
              <SubTitle>전체 참여자 중 {userTestResult.rank}등이에요!</SubTitle>
            </>
          ) : (
            <>
              <div style={{ paddingBottom: "2.4rem" }}>
                <Title>{userTestResult}</Title>
                <SubTitle>
                  {Math.round(percent)}%의 참여자와 같은 유형이에요!
                </SubTitle>
              </div>
              <ImageView imageUrl={img} />
              <Inform>{returnTextDom(description)}</Inform>
            </>
          )}
        </div>
        {current_testID && (
          <BtnField onClick={handleonClick}>테스트 다시하기</BtnField>
        )}
      </div>
      <RoundContiner noPadding>
        {isRankMode ? (
          <TitleBox>
            <RankingList top={5} userRanking={rankOrder} noline />
            {!loggedIn && status !== LOADING && (
              <BtnField
                color="skyBlue"
                onClick={() => {
                  const { pathname, search } = window.location;
                  goPage("/login", null, {
                    from: pathname,
                    search,
                    resultID: responseUid,
                  });
                }}
              >
                랭킹에 점수 남기기
              </BtnField>
            )}
          </TitleBox>
        ) : (
          <TitleBox>
            <Title where="middle">가장 많은 유형 TOP 1</Title>
            <SubTitle>
              {topResult.title} ({Math.round(topResult.percent)}%)
            </SubTitle>
            <div style={{ padding: "2.4em 0px" }}>
              <ImageView imageUrl={topResult.img} />
            </div>
            <BtnField
              color="skyBlue"
              onClick={() =>
                goPage("/testing/otherType", document.location.search)
              }
            >
              다른 유형 전체보기
            </BtnField>
          </TitleBox>
        )}
        {/* TODO: 2차 개발*/}
        <TitleBox title="테스트 메이커에게 한마디">
          <ComInput
            hintText={"익명으로 메이커만 볼 수 있어요"}
            onSubmit={handleOnSubmit}
            onFocus={handleOnFocus}
          />
        </TitleBox>
        <TitleBox>
          <Reply
            repliesCnt={repliesCnt}
            recent3replies={recent3Replies}
            testid={testUid}
          />
        </TitleBox>
        {/* <TitleBox title="더 많은 테스트가 있어요!" noline>
          <TestSwiper />
        </TitleBox> */}
      </RoundContiner>
      <BottomBtn
        btnArr={[
          { name: "홈으로", type: HOME },
          {
            name: "공유",
            type: SHARE,
            customClick: openAlert.bind(this, "share"),
          },
        ]}
      />
    </PageContainer>
  );
});

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  font-weight: bold;
  line-height: ${({ where }) =>
    where === "middle" ? "3.6" : "2.4"}rem; /*36px*/
  letter-spacing: -1px;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  text-align: center;
  letter-spacing: -0.5px;
  color: #697382;
`;

const Inform = styled.div`
  padding: 3rem 0px; /*30px*/
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: 2.4rem; /*24px*/
  letter-spacing: -0.5px;
  color: #697382;
`;

export default Result;
