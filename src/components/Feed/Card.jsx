import React, { useCallback, useState } from "react";
import ImageView from "../common/ImageView";
import styled from "styled-components";
import { Title } from "./Carousel";
import SVG from "../common/SVG";
import ENUM from "../../constants/Enum";
// import theme from "../../styles/theme";
import usePage from "../../hooks/usePage";

// const { blue, deepGray } = theme.colors;
const Card = ({
  title,
  coverImg,
  makerName,
  makerImg,
  sharedCnt,
  participatedCnt,
  testLink,
}) => {
  const { goPage } = usePage();
  // const [bookMark, setBookMark] = useState(false);
  // const onClickBookMark = useCallback(
  //   (e) => {
  //     setBookMark(!bookMark);
  //   },
  //   [bookMark, setBookMark]
  // );
  const onClickTest = useCallback(
    (e) => {
      goPage(`/${testLink}`);
    },
    [goPage, testLink]
  );

  const numberFormat = useCallback((n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  return (
    <CardBox>
      <PaddingBox>
        <TitleBox>
          <TestTitle onClick={onClickTest}>{title}</TestTitle>
          {/* <div>
            {bookMark ? (
              <SVG
                type={ENUM.AFTER_BOOKMARK}
                style={{
                  width: "24",
                  height: "24",
                  fill: blue,
                }}
                className="svg"
                onClick={onClickBookMark}
              />
            ) : (
              <SVG
                type={ENUM.BEFORE_BOOKMARK}
                style={{
                  width: "24",
                  height: "24",
                  fill: deepGray,
                }}
                className="svg"
                onClick={onClickBookMark}
              />
            )}
          </div> */}
        </TitleBox>

        <ImageBox onClick={onClickTest}>
          <ImageView imageUrl={coverImg} />
        </ImageBox>

        <InfoBox>
          <Profile>
            {makerImg ? (
              <img src={makerImg} alt={"이미지"} style={imgStyle} />
            ) : (
              <EmptyImg />
            )}
          </Profile>
          <Name>{makerName}</Name>

          <CountItems>
            <SVG
              type={ENUM.STAR}
              style={{
                width: "22",
                height: "22",
              }}
              className="svg-margin"
            />
            <Count>{numberFormat(participatedCnt)}</Count>

            <SVG
              type={ENUM.STAR}
              style={{
                width: "22",
                height: "22",
              }}
              className="svg-margin"
            />
            <Count>{numberFormat(sharedCnt)}</Count>
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
