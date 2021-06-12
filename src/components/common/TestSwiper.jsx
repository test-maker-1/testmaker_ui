import React, { useCallback } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import ImageView from "./ImageView";
// import usePage from "../../hooks/usePage";

const TestSwiper = (props) => {
  // const { goPage } = usePage();

  // test data
  const moreTests = [
    {
      title: "성격 유형검사 MBTI Test",
      img:
        "https://image.jtbcplus.kr/data/contents/jam_photo/202104/30/84ff7b58-4de1-4c5f-bc2f-0cb2f21e0d46.jpg",
    },
    {
      title: "성격 유형검사 MBTI Test",
      img: "http://topclass.chosun.com/news_img/2007/2007_008.jpg",
    },
    {
      title: "기모찌하게 변신",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvyY5aXFgVw1sq-goEHhKFcQfqIR_Et1UZw&usqp=CAU",
    },
  ];

  const onClick = useCallback((e) => {
    // goPage(`/${testLink}`)
    //console.log("출력");
  }, []);

  return (
    <Container>
      <Swiper slidesPerView={"auto"} spaceBetween={16} className="mySwiper">
        {moreTests.map((test, idx) => (
          <SwiperSlide key={idx}>
            <div>
              <div onClick={onClick}>
                <ImageView imageUrl={test.img} height={"60%"} />
              </div>
              <Title onClick={onClick}>{test.title}</Title>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  .swiper-container {
    z-index: ${({ theme: { zIndex } }) => zIndex.feed};
  }
  .swiper-slide {
    width: 78.5%;
    cursor: pointer;
  }
`;

const Title = styled.div`
  padding-top: 0.8rem;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  font-weight: bold;
  line-height: 27px;
  letter-spacing: -0.6px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

export default TestSwiper;
