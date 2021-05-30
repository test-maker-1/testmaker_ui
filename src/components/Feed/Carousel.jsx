import React, { useCallback, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import ImageView from "../common/ImageView";
import { useSelector } from "react-redux";
import usePage from "../../hooks/usePage";

export default function CarouselComponent() {
  const { goPage } = usePage();
  const { top5Tests } = useSelector((state) => state.feed);
  const initTitle = top5Tests && top5Tests[0].title;
  const [topTest, setTopTest] = useState({ idx: 0, title: initTitle });

  useEffect(() => {});

  // const [topTest, setTopTest] = useState({});
  const onClickItem = (idx, item) => {
    onClickTest();
  };

  const onChange = (idx, item) => {
    setTopTest({ idx, title: item.props.title });
  };

  const onClickTest = useCallback(
    (e) => {
      goPage(`/${top5Tests && top5Tests[topTest.idx].testLink}`);
    },
    [goPage, top5Tests, topTest]
  );

  return (
    <Ranking>
      <TitleBox>
        <Top> TOP {topTest.idx + 1}</Top>
        <Title onClick={onClickTest}>{topTest.title}</Title>
      </TitleBox>

      <CarouselBox>
        {top5Tests && (
          <Carousel
            showArrows
            showIndicators
            infiniteLoop
            useKeyboardArrows
            autoPlay
            stopOnHover
            swipeable
            emulateTouch
            showStatus={false}
            showThumbs={false}
            interval={5000}
            onClickItem={onClickItem}
            onChange={onChange}
            selectedItem={0}
          >
            {top5Tests.map((test) => (
              <ImageView
                key={test.uid}
                imageUrl={test.coverImg}
                title={test.title}
                height="calc(100% / 1.76)"
                border={false}
              />
            ))}
          </Carousel>
        )}
      </CarouselBox>
    </Ranking>
  );
}

const Ranking = styled.div`
  width: 100%;
  padding: 0 0 2rem 0;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  padding: 0 ${({ theme: { paddings } }) => paddings.main}rem;
  margin: 1.2rem 0;
  height: 3.2rem;
  text-align: center;
`;
const Top = styled.div`
  margin-right: 8px;
  width: 6rem;
  padding: 6px;
  border-radius: 8px;
  background: ${({ theme: { colors } }) => colors.skyBlue};
  color: ${({ theme: { colors } }) => colors.blue};
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 19px;
  letter-spacing: -0.3px;
`;
export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}rem;
  line-height: 30px;
  text-align: left;
  letter-spacing: -0.8px;
  color: ${({ theme: { colors } }) => colors.darkGray};
  cursor: pointer;
`;

const CarouselBox = styled.div`
  .flex-box {
    display: flex;
  }
  .slider {
    cursor: pointer;
  }
`;
