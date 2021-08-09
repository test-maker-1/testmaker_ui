import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { ImageView, SVG, Loading, NoticeAlert } from "../common";
import { Title } from "./Carousel";

import FeedAPI from "../../api/feedAPI";
import usePage from "../../hooks/usePage";
import useUser from "../../hooks/useUser";
import useMiniReducer from "../../hooks/useMiniReducer";
import { ERROR, LOADING } from "../../utils/asyncUtils";

import ENUM from "../../constants/Enum";
import msg from "../../constants/msg";

import { ReactComponent as BeforeBookmark } from "../../resources/svg/before_bookmark.svg";
import { ReactComponent as AfterBookmark } from "../../resources/svg/after_bookmark.svg";

const Card = ({
  uid,
  title,
  coverImg,
  makerName,
  makerProfile,
  sharedCnt,
  participatedCnt,
  testLink,
}) => {
  const _isBookmark = useRef(false);

  const { data, loggedIn } = useUser();
  const { goPage } = usePage();
  const { state, request, requestSuccess, requestError } = useMiniReducer();

  const isEmptyBookmark = !data || !data.hasOwnProperty("bookmarkedTestUids");
  _isBookmark.current = !isEmptyBookmark
    ? data.bookmarkedTestUids.includes(uid)
    : false;

  const [isBookmark, setIsBookmark] = useState(_isBookmark);

  const onClickTest = () => {
    const testid = testLink.split("?")[1];
    goPage(`/testing/welcome`, testid);
  };

  const numberFormat = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleToggleBookmark = async () => {
    if (!loggedIn) {
      NoticeAlert.open({
        text: msg.errorPage[403],
        btns: [{ name: "돌아가기" }],
      });
      return;
    }

    request();
    const { status } = await FeedAPI.addBookmark(uid);

    if (status === ERROR) {
      requestError(500);
      NoticeAlert.open({
        text: msg.errorPage[500],
        btns: [{ name: "돌아가기" }],
      });
      return;
    }

    setIsBookmark((prevIsBookmark) => !prevIsBookmark);
    requestSuccess();
  };

  useEffect(() => setIsBookmark(_isBookmark.current), [isEmptyBookmark]);

  return (
    <CardBox>
      {state.status === LOADING && <Loading />}
      <PaddingBox>
        <TitleBox>
          <TestTitle onClick={onClickTest}>{title}</TestTitle>
          <div>
            {!isBookmark ? (
              <BeforeBookmark onClick={handleToggleBookmark} />
            ) : (
              <AfterBookmark onClick={handleToggleBookmark} />
            )}
          </div>
        </TitleBox>

        <ImageBox onClick={onClickTest}>
          <ImageView imageUrl={coverImg} />
        </ImageBox>

        <InfoBox>
          <Profile>
            {makerProfile ? (
              <img src={makerProfile} alt={"이미지"} style={imgStyle} />
            ) : (
              <EmptyImg />
            )}
          </Profile>
          <Name>{makerName}</Name>

          <CountItems>
            <SVG
              type={ENUM.SHARE}
              style={{
                width: "22",
                height: "22",
              }}
              className="svg-margin"
            />
            <Count>{numberFormat(sharedCnt)}</Count>

            <SVG
              type={ENUM.PART}
              style={{
                width: "22",
                height: "22",
              }}
              className="svg-margin"
            />
            <Count>{numberFormat(participatedCnt)}</Count>
          </CountItems>
        </InfoBox>
      </PaddingBox>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.ivory};
  padding-bottom: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
`;

const PaddingBox = styled.div`
  padding: 0 ${({ theme: { paddings } }) => paddings.main}rem;
`;

const TitleBox = styled.div`
  padding: ${({ theme: { fontSizes } }) => fontSizes.extra}rem 0 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TestTitle = styled(Title)``;

const ImageBox = styled.div`
  padding: 0.8rem 0 0.8rem 0;
  cursor: pointer;
  .flex-box {
    border-radius: 10px;
  }
`;

const InfoBox = styled.div`
  padding-top: 0.8rem;
  display: flex;
`;

const CountItems = styled.div`
  margin-left: auto;
  display: flex;
  svg:nth-child(3) {
    margin-left: 16px;
  }
`;

const Profile = styled.div`
  width: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
  height: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
  margin-right: 8px;
`;

const EmptyImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin: 0px auto;
  background: #dadee6;
`;

const imgStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  margin: "0px auto",
};

const Name = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors } }) => colors.darkGray};
`;

const Count = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #697382;
  margin-left: 4px;
`;
