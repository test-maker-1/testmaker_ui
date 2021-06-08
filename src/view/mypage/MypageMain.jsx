import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Loading, SVG } from "../../components/common";
import ENUM from "../../constants/Enum";
import Tab from "../../components/MyPage/Tab";

import useUser from "../../hooks/useUser";
import Error from "../Error";
import TabTests from "../../components/MyPage/TabTests";
import usePage from "../../hooks/usePage";

const MypageMain = memo((props) => {
  const { goPage } = usePage();
  const {
    logInLoading,
    loggedIn,
    data,
    status,
    getUser,
    getPartTests,
    updateUserLoading,
  } = useUser();

  useEffect(() => {
    if (!logInLoading) getUser(); // -> pareTests ? .... 안불러와지잖아. -> 유저 정보/참여한 테스트들...
    // 이미 checkLogIn 중일 때 -> logInLoading => true
    console.log("요청상태", status);
    data && getPartTests({ num_elements: 20, uid: data.uid });
  }, []);

  const onClick = () => goPage("/mypage/manage");

  if (!loggedIn) return <Error code={403} />;
  return updateUserLoading && logInLoading ? (
    <Loading loading={updateUserLoading && logInLoading} />
  ) : (
    <div style={{ width: "100%" }}>
      <InfoContainer>
        <InfoUser>
          <div className="space-left">
            <InfoAva>
              {data.profileImg ? (
                <img src={data.profileImg} alt={"이미지"} style={imgStyle} />
              ) : (
                <EmptyImg />
              )}
            </InfoAva>
            <Partition onClick={onClick}>{data.nickname}</Partition>
          </div>
          <div className="space-right">
            <SVG
              type={ENUM.STAR}
              style={{
                width: "24",
                height: "24",
              }}
              onClick={onClick}
            />
          </div>
        </InfoUser>
        <InfoBox>
          <InfoArea>
            <InfoSubBox>
              <InfoInBox>
                <InfoTitle>북마크</InfoTitle>
                <InfoCnt>0개</InfoCnt>
              </InfoInBox>
            </InfoSubBox>
            <InfoSubBox>
              <InfoInBox>
                <InfoTitle>내가 쓴 댓글</InfoTitle>
                <InfoCnt>10개</InfoCnt>
              </InfoInBox>
            </InfoSubBox>
            <InfoSubBox>
              <InfoInBox>
                <InfoTitle>참여 테스트</InfoTitle>
                <InfoCnt>{data.didTestUids.length}개</InfoCnt>
              </InfoInBox>
            </InfoSubBox>
          </InfoArea>
        </InfoBox>
        <Tab />
      </InfoContainer>
      <TabTests />
    </div>
  );
});

const InfoContainer = styled.div`
  padding: 16px 2rem 0px; /*20px*/
`;

const InfoUser = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  .space-left,
  .space-right {
    align-items: center;
    display: flex;
  }
`;

const InfoAva = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  margin-right: 8px;
`;

const imgStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  margin: "0px auto",
};

const EmptyImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin: 0px auto;
  background: #dadee6;
`;

const Partition = styled.p`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: 21px;
  letter-spacing: -0.3px;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #515966;
`;

const InfoBox = styled.div`
  width: 100%; /*374px*/
  height: 83px;
  background: ${({ theme: { colors } }) => colors.ivory};
  border-radius: 13px;
  margin: 1.2rem 0px 2.4rem;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

const InfoArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const InfoSubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

const InfoInBox = styled.div`
  text-align: center;
`;

const InfoTitle = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem; /*14px*/
  line-height: 21px;
  letter-spacing: -0.3px;
`;

const InfoCnt = styled.p`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}rem; /*20px*/
  line-height: 30px;
  letter-spacing: -0.8px;
`;

export default MypageMain;
