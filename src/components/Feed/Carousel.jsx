import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import ImageView from "../common/ImageView";

export default function CarouselComponent() {
  const imgUrl = [
    {
      id: 0,
      title: "이도현 여자친구 테스트",
      src: "https://post-phinf.pstatic.net/MjAyMDA5MzBfNDMg/MDAxNjAxNDU5NzQyNjUx._Dcf8eWn2FkYyOdj2F8kuyUj4SxXsk79gK7ZeflWWfUg.v4HYhPXDHQ_ro_sUfxuz4CzurEZEEggScmpiS212k-og.JPEG/OOOH3516_%EC%9D%B4%EB%8F%84%ED%98%84_%EC%88%98%EC%A0%95.jpg?type=w1200",
    },
    {
      id: 1,
      title: "정현정 테스트",
      src: "http://img.sportsworldi.com/content/image/2020/11/17/20201117516497.jpg",
    },
    {
      id: 2,
      title: "MBTI",
      src: "https://blog.kakaocdn.net/dn/beE4XC/btqKv7OxTSa/vAeCkYVVUHOH1FfUZoVkn1/img.jpg",
    },
  ];
  const [topTest, setTopTest] = useState({ idx: 0, title: imgUrl[0].title });
  const onClickItem = (idx, item) => {
    console.log(idx, item);
  };

  const onChange = (idx, item) => {
    setTopTest({ idx, title: item.props.title });
  };

  return (
    <Ranking>
      <TitleBox>
        <Top>TOP {topTest.idx + 1}</Top>
        <Title>{topTest.title}</Title>
      </TitleBox>

      <CarouselBox>
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
          {imgUrl.map((test, idx) => (
            <ImageView
              key={idx}
              imageUrl={test.src}
              title={test.title}
              height="calc(100% / 1.76)"
              border={false}
            />
          ))}
        </Carousel>
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
`;

const CarouselBox = styled.div`
  .flex-box {
    display: flex;
  }
  .slider {
    cursor: pointer;
  }
`;
