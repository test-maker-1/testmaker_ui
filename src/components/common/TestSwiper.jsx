import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import ImageView from "./ImageView";

const TestSwiper = (props) => {
  const moreTests = [
    {
      title: "kokoko RED ko",
      img: "https://image.jtbcplus.kr/data/contents/jam_photo/202104/30/84ff7b58-4de1-4c5f-bc2f-0cb2f21e0d46.jpg",
    },
    {
      title: "배우 정현정 알아보기",
      img: "http://topclass.chosun.com/news_img/2007/2007_008.jpg",
    },
    {
      title: "기모찌하게 변신",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvyY5aXFgVw1sq-goEHhKFcQfqIR_Et1UZw&usqp=CAU",
    },
  ];

  return (
    <Container>
      <Swiper slidesPerView={"auto"} spaceBetween={16} className="mySwiper">
        {moreTests.map((test) => (
          <SwiperSlide>
            <TestCard>
              <ImageView imageUrl={test.img} height="16.7rem" />
              <Title>{test.title}</Title>
            </TestCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestSwiper;

const Container = styled.div`
  padding: 0 2rem;
  max-width: 50rem;
  height: auto;
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    width: auto !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
  }
`;

const TestCard = styled.div`
  width: 29.6rem;
`;

const Title = styled.div`
  padding-top: 0.8rem;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  line-height: 27px;
  letter-spacing: -0.6px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

const ImageBox = styled.div`
  cursor: pointer;
`;
