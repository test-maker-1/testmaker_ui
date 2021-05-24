import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CarouselComponent from "../components/Feed/Carousel";
import BottomBtn, { PageContainer } from "../components/frame/BottomBtn";
import ENUM from "../constants/Enum";
import TestsAtOneTag from "../components/Feed/TestsAtOneTag";
import { initFeed } from "../redux/reducer/feedReducer";
import TagSwiper from "../components/common/TagSwiper";
import Card from "../components/Feed/Card";
import axios from "axios";

const { PICKTEST } = ENUM;
const Feed = (props) => {
  const tags = [
    { id: 0, tag: "전체" },
    { id: 1, tag: "#우정테스트" },
    { id: 3, tag: "#성격" },
    { id: 4, tag: "#디프만" },
    { id: 5, tag: "#치킨" },
    { id: 6, tag: "#이도현존잘.." },
    { id: 7, tag: "#기모찡" },
    { id: 8, tag: "#정현정" },
  ];

  const tests = [
    {
      title: "우정 테스트",
      coverImg:
        "https://image.aladin.co.kr/product/6579/32/cover500/k442433954_1.jpg",
      makerName: "정현정",
      makerImg:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMzFfMTYz/MDAxNTgwNDU0MDExMTYw.EVkduy_2Wnn67MTqmuwxjO0YMQsci6pTsG1-0mq0iGUg.4hOLGC2htcZ9elJkT6NnQ1Q59Hmf05j0mn0AP_Q136Ig.JPEG.lha6440/%EC%9D%B4%EC%94%A8.._%EA%B7%80%EC%97%AC%EC%9B%8C...jpg?type=w800",
      sharedCnt: 24,
      participatedCnt: 580,
    },
    {
      title: "디프만 테스트",
      coverImg: "https://miro.medium.com/max/4000/1*aM7EB4eIMsw-6Yoqec1Udg.png",
      makerName: "디프만 관리자",
      sharedCnt: 50,
      participatedCnt: 98,
    },
    {
      title: "연애 검사",
      coverImg:
        "https://t1.daumcdn.net/liveboard/textat/1ab08b47ac354700ad7de78b0908d44b.png",
      makerName: "모태솔로",
      makerImg:
        "http://img.segye.com/content/image/2018/01/17/20180117519186.jpg",
      sharedCnt: 5135,
      participatedCnt: 125,
    },
    {
      title: "이 새끼 뭐야. 인성 문제 있어?",
      coverImg:
        "http://flexible.img.hani.co.kr/flexible/normal/640/359/imgdb/original/2020/0731/9315961732870235.jpg",
      makerName: "이근대위",
      makerImg:
        "https://image.news1.kr/system/photos/2020/9/28/4404922/article.jpg/dims/optimize",
      sharedCnt: 855,
      participatedCnt: 160,
    },
  ];
  const [selected, setSelected] = useState(tags[0].tag);

  const dispatch = useDispatch();
  const { feedLoading, feedError, top5Tests, top10Tags, testsByTag } =
    useSelector((state) => state.feed);
  const all = "전체";
  useEffect(() => {
    const data = axios.get(
      `https://asia-northeast1-test-maker-18516.cloudfunctions.net/home?tag=${all}&last=0`
    );
    console.log(data);
    dispatch(initFeed());
  }, []);

  return (
    <Container>
      <CarouselComponent />
      <>
        <TagContainer>
          <TagSwiper
            tags={tags}
            selectedTag={selected}
            setSelected={setSelected}
          />
        </TagContainer>

        <CardContainer>
          {tests.map((test, idx) => (
            <Card
              key={`test ${idx}`}
              title={test.title}
              coverImg={test.coverImg}
              makerName={test.makerName}
              makerImg={test.makerImg}
              sharedCnt={test.sharedCnt}
              participatedCnt={test.participatedCnt}
            />
          ))}
        </CardContainer>
      </>
      <BottomBtn btnArr={[{ name: "테스트 만들기 도전!", type: PICKTEST }]} />
    </Container>
  );
};

Feed.propTypes = {};

export default Feed;

const Container = styled(PageContainer)`
  z-index: 0;
`;

const TagContainer = styled.div`
  position: sticky;
  top: 5.6rem;
  z-index: 100;
`;

const CardContainer = styled.div`
  margin-top: 2.8rem;
`;
