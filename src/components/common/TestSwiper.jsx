import React, { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import ImageView from "./ImageView";
import usePage from "../../hooks/usePage";

const TestSwiper = (props) => {
  const { goPage } = usePage();
  const moreTests = [
    {
      title: "성격 유형검사 MBTI Test",
      img: "https://image.jtbcplus.kr/data/contents/jam_photo/202104/30/84ff7b58-4de1-4c5f-bc2f-0cb2f21e0d46.jpg",
    },
    {
      title: "성격 유형검사 MBTI Test",
      img: "http://topclass.chosun.com/news_img/2007/2007_008.jpg",
    },
    {
      title: "기모찌하게 변신",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvyY5aXFgVw1sq-goEHhKFcQfqIR_Et1UZw&usqp=CAU",
    },
  ];
  const onClick = useCallback((e) => {
    // goPage(`/${testLink}`)
    console.log("출력");
  });
  return (
    <Container>
      <Swiper slidesPerView={"auto"} spaceBetween={16} className="mySwiper">
        {moreTests.map((test) => (
          <SwiperSlide>
            <TestCard>
              <ImgBox onClick={onClick}>
                <ImageView imageUrl={test.img} height="23.2rem" />
              </ImgBox>
              <Title onClick={onClick}>{test.title}</Title>
            </TestCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestSwiper;

const Container = styled.div`
  width: 100%;
  height: 100%;
  .swiper-container {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide {
    width: 78.5%;
    height: 0;
    padding-bottom: 30rem;
  }
`;

const TestCard = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Title = styled.div`
  padding-top: 0.8rem;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  font-weight: bold;
  line-height: 27px;
  letter-spacing: -0.6px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
  cursor: pointer;
`;

const ImgBox = styled.div`
  cursor: pointer;
`;
