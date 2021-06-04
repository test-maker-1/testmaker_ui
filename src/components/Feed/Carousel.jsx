import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ImageView from "../common/ImageView";
import { useSelector } from "react-redux";
import usePage from "../../hooks/usePage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Swiper]);

const CarouselComponent = React.memo(() => {
  const { goPage } = usePage();
  const { top5Tests } = useSelector((state) => state.feed);
  const initTitle = top5Tests && top5Tests[0].title;
  const [topTest, setTopTest] = useState({ idx: 0, title: initTitle });

  const onSlideChange = useCallback(
    (swiper) => {
      let currentIndex = swiper.realIndex;
      setTopTest({
        idx: currentIndex,
        title: top5Tests && top5Tests[currentIndex].title,
      });
    },
    [setTopTest, top5Tests]
  );

  const onClickTest = useCallback(
    (e) => {
      const testid = top5Tests[topTest.idx].testLink.split("?")[1];
      goPage(`/testing/welcome`, testid);
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
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={10}
          onSlideChange={onSlideChange}
          autoplay={{
            delay: "5000",
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {top5Tests &&
            top5Tests.map((test) => (
              <SwiperSlide onClick={onClickTest} key={`slideKey_${test.uid}`}>
                <ImageView
                  key={`key_${test.uid}`}
                  imageUrl={test.coverImg}
                  title={test.title}
                  height="calc(100% / 1.76)"
                  border={false}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </CarouselBox>
    </Ranking>
  );
});

export default CarouselComponent;

const CarouselBox = styled.div`
  .swiper-container {
    z-index: ${({ theme: { zIndex } }) => zIndex.feed};
  }
  .swiper-container,
  .swiper-wrapper {
    transition-duration: 600ms !important;
  }
  .swiper-slide {
    width: 100%;
    cursor: pointer;
  }
  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    pointer-events: auto;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    opacity: 0.5;
    background: #fafafa;
    box-shadow: 1px 1px 3px rgba(20, 23, 25, 0.7);
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #ffffff;
  }
`;
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
